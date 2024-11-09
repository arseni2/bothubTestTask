import { Test, TestingModule } from '@nestjs/testing';
import { TokenUsageController } from './token-usage.controller';
import { TokenUsageService } from './token-usage.service';

describe('TokenUsageController', () => {
  let controller: TokenUsageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenUsageController],
      providers: [TokenUsageService],
    }).compile();

    controller = module.get<TokenUsageController>(TokenUsageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
