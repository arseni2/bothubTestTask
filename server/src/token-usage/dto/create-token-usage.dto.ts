import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateTokenUsageDto {
	@IsNotEmpty({message: "поле не должно быть пустым"})
	@IsNumber({}, {message: "поле должно быть числом"})
	@ApiProperty()
	creditsUsed: number

	@IsNotEmpty({message: "поле не должно быть пустым"})
	@IsNumber({}, {message: "поле должно быть числом"})
	@ApiProperty()
	modelId: number;

	@IsNotEmpty({message: "поле не должно быть пустым"})
	@IsNumber({}, {message: "поле должно быть числом"})
	@ApiProperty()
	userId: number

	@IsNotEmpty({message: "поле не должно быть пустым"})
	@IsString({message: "поле должно быть строкой"})
	@ApiProperty()
	message: string
}
