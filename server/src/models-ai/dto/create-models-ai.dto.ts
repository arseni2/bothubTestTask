import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateModelsAiDto {
	@IsNotEmpty({message: "поле должно быть заполненным"})
	@IsString({message: "поле name должно быть строкой"})
	@ApiProperty()
	name: string

	@IsNotEmpty({message: "поле должно быть заполненным"})
	@IsNumber({}, {message: "поле должно быть числом"})
	@ApiProperty()
	tokenCost: number
}
