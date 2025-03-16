import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateShoppingHistoryDto } from './dto/create-shopping-history.dto';
import { UpdateShoppingHistoryDto } from './dto/update-shopping-history.dto';
import { ShoppingHistoryService } from './shopping-history.service';

@Controller('shopping-history')
export class ShoppingHistoryController {
  constructor(
    private readonly shoppingHistoryService: ShoppingHistoryService,
  ) {}

  @Post()
  async create(@Body() createShoppingHistoryDto: CreateShoppingHistoryDto[]) {
    return await this.shoppingHistoryService.create(createShoppingHistoryDto);
  }
  @Post('one')
  async createHistory(
    @Body() createShoppingHistoryDto: CreateShoppingHistoryDto,
  ) {
    return await this.shoppingHistoryService.createHistoryItem(
      createShoppingHistoryDto,
    );
  }

  @Get('/tags-item')
  findAll() {
    return this.shoppingHistoryService.findAllItems();
  }
  @Get('/tags')
  findAllTags() {
    return this.shoppingHistoryService.findTags();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShoppingHistoryDto: UpdateShoppingHistoryDto,
  ) {
    return this.shoppingHistoryService.update(+id, updateShoppingHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingHistoryService.remove(+id);
  }
}
