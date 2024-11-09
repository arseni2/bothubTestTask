import { Test, TestingModule } from '@nestjs/testing';
import { ModelsAiService } from './models-ai.service';

describe('ModelsAiService', () => {
  let service: ModelsAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelsAiService],
    }).compile();

    service = module.get<ModelsAiService>(ModelsAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
