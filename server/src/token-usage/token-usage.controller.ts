import {Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards} from '@nestjs/common';
import {TokenUsageService} from './token-usage.service';
import {CreateTokenUsageDto} from './dto/create-token-usage.dto';
import {UpdateTokenUsageDto} from './dto/update-token-usage.dto';
import {AuthGuard} from "../auth/guards/auth.guard";
import {Roles} from "../role/role-types";
import {Role} from "../auth/decorators/role.decorator";
import {ApiBearerAuth} from "@nestjs/swagger";
import {IRequestWithUser} from "../types";

@ApiBearerAuth()
@Controller('token-usage')
export class TokenUsageController {
  constructor(private readonly tokenUsageService: TokenUsageService) {}

  @Role(Roles.Admin)
  @Post()
  create(@Body() createTokenUsageDto: CreateTokenUsageDto) {
    return this.tokenUsageService.create(createTokenUsageDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() req: IRequestWithUser) {
    return this.tokenUsageService.findAll(req.user.id);
  }

  @Role(Roles.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTokenUsageDto: UpdateTokenUsageDto) {
    return this.tokenUsageService.update(+id, updateTokenUsageDto);
  }

  @Role(Roles.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokenUsageService.remove(+id);
  }
}
