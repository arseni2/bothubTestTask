import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ormConfig} from "./config/orm.config";
import {join} from 'path';
import {AuthModule} from './auth/auth.module';
import {RoleModule} from './role/role.module';
import {UserModule} from './user/user.module';
import {ModelsAiModule} from './models-ai/models-ai.module';
import {TokenUsageModule} from './token-usage/token-usage.module';
import {OpenAiModule} from './open-ai/open-ai.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: join(process.cwd(), '.env'),
  }),
    TypeOrmModule.forRootAsync(ormConfig),
    AuthModule,
    RoleModule,
    UserModule,
    ModelsAiModule,
    TokenUsageModule,
    OpenAiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
