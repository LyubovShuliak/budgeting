import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingHistoryController } from './shopping-history.controller';
import { ShoppingHistoryService } from './shopping-history.service';

describe('ShoppingHistoryController', () => {
  let controller: ShoppingHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingHistoryController],
      providers: [ShoppingHistoryService],
    }).compile();

    controller = module.get<ShoppingHistoryController>(ShoppingHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
