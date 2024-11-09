import { PartialType } from '@nestjs/swagger';
import { CreateModelsAiDto } from './create-models-ai.dto';

export class UpdateModelsAiDto extends PartialType(CreateModelsAiDto) {}
