import { Test, TestingModule } from '@nestjs/testing';
import { ModelsAiController } from './models-ai.controller';
import { ModelsAiService } from './models-ai.service';

describe('ModelsAiController', () => {
  let controller: ModelsAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModelsAiController],
      providers: [ModelsAiService],
    }).compile();

    controller = module.get<ModelsAiController>(ModelsAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
