import { Injectable } from '@nestjs/common';
import { CreateModelsAiDto } from './dto/create-models-ai.dto';
import { UpdateModelsAiDto } from './dto/update-models-ai.dto';
import {Repository} from "typeorm";
import {ModelsAiEntity} from "./entities/models-ai.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ModelsAiService {
  constructor(
      @InjectRepository(ModelsAiEntity)
      private readonly repo: Repository<ModelsAiEntity>
  ) {
  }
  create(createModelsAiDto: CreateModelsAiDto) {
    return this.repo.save(createModelsAiDto);
  }

  findAll() {
    return this.repo.find();
  }

  async findByName(name: string) {
    return await this.repo.findOne({
      where: {
        name
      },
      transaction: false
    })
  }

  update(id: number, updateModelsAiDto: UpdateModelsAiDto) {
    return this.repo.update(id, updateModelsAiDto)
  }

  remove(id: number) {
    return this.repo.delete(id)
  }
}
