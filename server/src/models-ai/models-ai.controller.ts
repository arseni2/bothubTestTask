import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ModelsAiService} from './models-ai.service';
import {CreateModelsAiDto} from './dto/create-models-ai.dto';
import {UpdateModelsAiDto} from './dto/update-models-ai.dto';
import {Role} from "../auth/decorators/role.decorator";
import {Roles} from "../role/role-types";

@Controller('models-ai')
export class ModelsAiController {
  constructor(private readonly modelsAiService: ModelsAiService) {}

  @Role(Roles.Admin)
  @Post()
  create(@Body() createModelsAiDto: CreateModelsAiDto) {
    return this.modelsAiService.create(createModelsAiDto);
  }

  @Get()
  findAll() {
    return this.modelsAiService.findAll();
  }

  @Role(Roles.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModelsAiDto: UpdateModelsAiDto) {
    return this.modelsAiService.update(+id, updateModelsAiDto);
  }

  @Role(Roles.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modelsAiService.remove(+id);
  }
}
