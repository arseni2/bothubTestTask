import { Module } from '@nestjs/common';
import { ModelsAiService } from './models-ai.service';
import { ModelsAiController } from './models-ai.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ModelsAiEntity} from "./entities/models-ai.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [ModelsAiController],
  providers: [ModelsAiService],
  exports: [ModelsAiService],
  imports: [TypeOrmModule.forFeature([ModelsAiEntity]), JwtModule]
})
export class ModelsAiModule {}
