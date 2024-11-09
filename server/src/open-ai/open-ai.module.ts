import { Module } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { OpenAiController } from './open-ai.controller';
import {JwtModule} from "@nestjs/jwt";
import {TokenUsageModule} from "../token-usage/token-usage.module";
import {ModelsAiModule} from "../models-ai/models-ai.module";
import {UserModule} from "../user/user.module";

@Module({
  controllers: [OpenAiController],
  providers: [OpenAiService],
  imports: [JwtModule, TokenUsageModule, ModelsAiModule, UserModule]
})
export class OpenAiModule {}
