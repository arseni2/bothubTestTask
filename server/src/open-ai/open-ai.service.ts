import {BadRequestException, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {QueryDto} from "./dto/query.dto";
import {ModelsAiService} from "../models-ai/models-ai.service";
import {UserService} from "../user/user.service";
import {TokenUsageService} from "../token-usage/token-usage.service";
import OpenAIApi from 'openai';
import {map, Observable, Subject} from "rxjs";
import {Readable} from 'stream';


@Injectable()
export class OpenAiService {
	public openai: OpenAIApi;

	constructor(
		private readonly modelsAiService: ModelsAiService,
		private readonly userService: UserService,
		private readonly tokenUsageService: TokenUsageService,
	) {
		this.openai = new OpenAIApi({
			apiKey: process.env.tokenAI,
			baseURL: process.env.urlAI
		})
	}

	async streamQuery(userId: number, dto: QueryDto): Promise<Observable<any>> {
		const subject = new Subject<any>();
		await this.handleCompletionStream(subject, userId, dto);
		return subject.asObservable().pipe(
			map((message) => ({data: message.data})),
		);
	}

	private async handleCompletionStream(subject: Subject<any>, userId: number, dto: QueryDto) {
		const model = await this.modelsAiService.findByName(dto.model);
		if (!model) throw new BadRequestException(`Нет такой модели ${dto.model}, доступны "gpt-4", "gpt-3.5"`);

		const user = await this.userService.findById(userId);
		const credits = Math.floor((dto.maxToken / 100) * model.tokenCostInCredit);
		if (user.balance - credits < 0) throw new HttpException("Недостаточно средств", HttpStatus.FORBIDDEN);

		const balance = Math.floor(user.balance - credits);
		await this.userService.update(userId, {balance});
		await this.tokenUsageService.create({userId, creditsUsed: credits, modelId: model.id, message: dto.query});

		let history = [];
		if (dto.isContext) {
			history = await this.tokenUsageService.getMessagesByModelIdAndUserId(userId, model.id);
		}

		const completionStream = await this.openai.chat.completions.create({
			model: model.name,
			messages: [
				...history,
				{
					role: 'assistant',
					content: dto.query,
				},
			],
			temperature: dto.temperature,
			max_tokens: dto.maxToken,
			stream: true,
		});

		const readableStream = Readable.from(completionStream as any);

		readableStream.on('data', (chunk) => {
			const content = chunk.choices?.[0]?.delta?.content;
			if (content) {
				subject.next({data: content});
			}
		});

		readableStream.on('end', () => {
			subject.complete();
		});

		readableStream.on('error', (error) => {
			console.error(error);
			subject.error("Ошибка при получении данных");
		});

	}
}
