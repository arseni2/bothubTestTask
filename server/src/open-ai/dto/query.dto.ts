import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class QueryDto {
	@ApiProperty()
	@IsString({message: "поле должно быть строкой"})
	@IsNotEmpty({message: "поле не должно быть пустым"})
	query: string

	@ApiProperty()
	@IsString({message: "поле должно быть строкой"})
	@IsNotEmpty({message: "поле не должно быть пустым"})
	model: string

	@ApiProperty({default: 2293})
	@IsNumber({}, {message: "поле должно быть числом"})
	@IsOptional({})
	maxToken?: number = 2293

	@ApiProperty({default: 0.7})
	@IsNumber({}, {message: "поле должно быть числом"})
	@IsOptional({})
	temperature?: number = 0.7

	@ApiProperty({default: true})
	@IsBoolean({message: "поле должно быть булевым значением"})
	@IsOptional({})
	isContext?: boolean = true
}