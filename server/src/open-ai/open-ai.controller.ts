import {Controller, Query, Req, Sse, UseGuards} from '@nestjs/common';
import {OpenAiService} from './open-ai.service';
import {AuthGuard} from "../auth/guards/auth.guard";
import {IRequestWithUser} from "../types";
import {QueryDto} from "./dto/query.dto";
import {ApiBearerAuth} from "@nestjs/swagger";

@ApiBearerAuth()
@Controller('open-ai')
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @UseGuards(AuthGuard)
  @Sse('stream')
  query(@Req() req: IRequestWithUser, @Query() query: QueryDto) {
    const dto: QueryDto = {
      query: query.query || '',
      model: query.model || '',
      maxToken: query.maxToken !== undefined ? query.maxToken : 2293,
      temperature: query.temperature !== undefined ? query.temperature : 0.7,
      isContext: query.isContext !== undefined ? query.isContext : true,
    };
    return this.openAiService.streamQuery(req.user.id, dto);
  }
}
