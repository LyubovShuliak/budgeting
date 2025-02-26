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
  create(@Body() createShoppingHistoryDto: CreateShoppingHistoryDto) {
    return this.shoppingHistoryService.create(createShoppingHistoryDto);
  }

  @Get()
  findAll() {
    return this.shoppingHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingHistoryService.findOne(+id);
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
