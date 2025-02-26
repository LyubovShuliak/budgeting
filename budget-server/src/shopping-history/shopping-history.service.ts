import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { History } from '../common/config/typeorm/entities/History';

import { CreateShoppingHistoryDto } from './dto/create-shopping-history.dto';
import { UpdateShoppingHistoryDto } from './dto/update-shopping-history.dto';

@Injectable()
export class ShoppingHistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}
  async create(createShoppingHistoryDto: CreateShoppingHistoryDto) {}

  findAll() {
    return `This action returns all shoppingHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingHistory`;
  }

  update(id: number, updateShoppingHistoryDto: UpdateShoppingHistoryDto) {
    return `This action updates a #${id} shoppingHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingHistory`;
  }
}
