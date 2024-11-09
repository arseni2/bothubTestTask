import { Module } from '@nestjs/common';
import { TokenUsageService } from './token-usage.service';
import { TokenUsageController } from './token-usage.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TokenUsageEntity} from "./entities/token-usage.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [TokenUsageController],
  providers: [TokenUsageService],
  imports: [TypeOrmModule.forFeature([TokenUsageEntity]), JwtModule],
  exports: [TokenUsageService]
})
export class TokenUsageModule {}
