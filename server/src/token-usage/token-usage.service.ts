import {Injectable} from '@nestjs/common';
import {CreateTokenUsageDto} from './dto/create-token-usage.dto';
import {UpdateTokenUsageDto} from './dto/update-token-usage.dto';
import {Repository} from "typeorm";
import {TokenUsageEntity} from "./entities/token-usage.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class TokenUsageService {
	constructor(
		@InjectRepository(TokenUsageEntity)
		private readonly repo: Repository<TokenUsageEntity>
	) {

	}

	create(createTokenUsageDto: CreateTokenUsageDto) {
		return this.repo.save(createTokenUsageDto)
	}

	async getMessagesByModelIdAndUserId(modelId: number, userId: number) {
		const rows = await this.repo.find({
			transaction: false,
			where: {
				userId, modelId
			}
		})

        return rows.map((row) => ({content: row.message, role: "assistant"}))
	}

	findAll(userId: number) {
		return this.repo.find({where: {userId}});
	}

	update(id: number, updateTokenUsageDto: UpdateTokenUsageDto) {
		return this.repo.update(id, updateTokenUsageDto);
	}

	remove(id: number) {
		return this.repo.delete(id);
	}
}
