import { PartialType } from '@nestjs/swagger';
import { CreateTokenUsageDto } from './create-token-usage.dto';

export class UpdateTokenUsageDto extends PartialType(CreateTokenUsageDto) {}
