import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingListService } from './shopping-list.service';

@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Post()
  create(@Body() createShoppingListDto: CreateShoppingListDto) {
    return this.shoppingListService.create(createShoppingListDto);
  }

  @Get()
  findAll() {
    return this.shoppingListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingListService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShoppingListDto: UpdateShoppingListDto,
  ) {
    return this.shoppingListService.update(+id, updateShoppingListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingListService.remove(+id);
  }
}
