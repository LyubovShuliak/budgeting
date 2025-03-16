import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { History } from '../common/config/typeorm/entities/History';
import { ItemName } from '../common/config/typeorm/entities/ItemName';
import { Price } from '../common/config/typeorm/entities/Price';
import { TagItemRelation } from '../common/config/typeorm/entities/TagItemRelation';
import { Tags } from '../common/config/typeorm/entities/Tags';

import { CreateShoppingHistoryDto } from './dto/create-shopping-history.dto';
import { UpdateShoppingHistoryDto } from './dto/update-shopping-history.dto';
import { ShoppingItem } from './entities/shopping-history.entity';

const b = [
  { name: 'інтернет', tags: [{ name: 'послуги' }] },
  { name: 'чай', tags: [{ name: 'напої' }] },
  { name: 'гель для прочистки труб', tags: [{ name: 'побутова хімія' }] },
  { name: 'гель для прибирання', tags: [{ name: 'побутова хімія' }] },
  { name: 'шкарпетки', tags: [{ name: 'одяг' }] },
  { name: 'засіб для посуду', tags: [{ name: 'побутова хімія' }] },
  { name: 'вологі серветки', tags: [{ name: 'гігієна' }] },
  { name: 'перець', tags: [{ name: 'овочі' }] },
  { name: 'томат', tags: [{ name: 'овочі' }] },
  { name: 'сир', tags: [{ name: 'молочні продукти' }] },
  { name: 'батон', tags: [{ name: 'хлібобулочні вироби' }] },
  { name: 'гранат', tags: [{ name: 'фрукти' }] },
  { name: 'пакет', tags: [{ name: 'господарські товари' }] },
  { name: 'знижка', tags: [{ name: 'фінанси' }] },
  { name: 'ігромаг', tags: [{ name: 'розваги' }] },
  { name: 'таксі', tags: [{ name: 'транспорт' }] },
  { name: 'кава в кафе', tags: [{ name: 'кафе та ресторани' }] },
  { name: 'фурнітура для бісеру', tags: [{ name: 'хобі' }] },
  { name: 'кава зерна', tags: [{ name: 'напої' }] },
  { name: 'мʼясо', tags: [{ name: "м'ясні продукти" }] },
  { name: 'картопля', tags: [{ name: 'овочі' }] },
  { name: 'яйце', tags: [{ name: 'молочні продукти' }] },
  { name: 'черевики', tags: [{ name: 'одяг' }] },
  { name: 'шльопанці', tags: [{ name: 'одяг' }] },
  { name: 'круглогубці для бісеру', tags: [{ name: 'інструменти' }] },
  { name: 'сирок', tags: [{ name: 'молочні продукти' }] },
  { name: 'огірок', tags: [{ name: 'овочі' }] },
  { name: 'молоко', tags: [{ name: 'молочні продукти' }] },
  { name: 'йогурт', tags: [{ name: 'молочні продукти' }] },
  { name: 'папір туалетний', tags: [{ name: 'гігієна' }] },
  { name: 'засіб для виведення плям', tags: [{ name: 'побутова хімія' }] },
  { name: 'відбілювач', tags: [{ name: 'побутова хімія' }] },
  { name: 'фастфуд', tags: [{ name: 'кафе та ресторани' }] },
  { name: 'доставка', tags: [{ name: 'послуги' }] },
  { name: 'грілки', tags: [{ name: 'господарські товари' }] },
  { name: 'термометр', tags: [{ name: 'медицина' }] },
  { name: 'банан', tags: [{ name: 'фрукти' }] },
  { name: 'спортлайф', tags: [{ name: 'спорт' }] },
  { name: 'бга', tags: [{ name: "здоров'я" }] },
  { name: 'органайзер для раковини', tags: [{ name: 'господарські товари' }] },
  { name: 'згущене молоко', tags: [{ name: 'солодощі' }] },
  { name: 'десерт', tags: [{ name: 'солодощі' }] },
  { name: 'вершки', tags: [{ name: 'молочні продукти' }] },
  { name: 'набір прищіпок', tags: [{ name: 'господарські товари' }] },
  { name: 'ніж', tags: [{ name: 'кухонне приладдя' }] },
  { name: 'ліки', tags: [{ name: 'медицина' }] },
  { name: 'гриби', tags: [{ name: 'овочі' }] },
  { name: 'сметана', tags: [{ name: 'молочні продукти' }] },
  { name: 'філе куряче', tags: [{ name: "м'ясні продукти" }] },
  { name: 'розстрочка', tags: [{ name: 'фінанси' }] },
  { name: 'батарейки', tags: [{ name: 'електроніка' }] },
  { name: 'снек', tags: [{ name: 'перекуси' }] },
  { name: 'часник', tags: [{ name: 'овочі' }] },
  { name: 'балик', tags: [{ name: "м'ясні продукти" }] },
  { name: 'комуналка', tags: [{ name: 'фінанси' }] },
  { name: 'благодійність', tags: [{ name: 'фінанси' }] },
  { name: 'податки', tags: [{ name: 'фінанси' }] },
  { name: 'пергамент', tags: [{ name: 'кухонне приладдя' }] },
  { name: 'овочечистка', tags: [{ name: 'кухонне приладдя' }] },
  { name: 'авокадо', tags: [{ name: 'фрукти' }] },
  { name: 'фета', tags: [{ name: 'молочні продукти' }] },
  { name: 'ковбаски', tags: [{ name: "м'ясні продукти" }] },
  { name: 'батат', tags: [{ name: 'овочі' }] },
  { name: 'мандарини', tags: [{ name: 'фрукти' }] },
  { name: 'макарони', tags: [{ name: 'бакалія' }] },
];

@Injectable()
export class ShoppingHistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
    @InjectRepository(ItemName)
    private readonly itemNamesRepository: Repository<ItemName>,
    @InjectRepository(Tags)
    private readonly tagsRepository: Repository<Tags>,
    @InjectRepository(TagItemRelation)
    private readonly tagsItemRepository: Repository<TagItemRelation>,
    @InjectRepository(Price)
    private readonly pricesRepository: Repository<Price>,
  ) {}
  async create(createShoppingHistoryDtoArr: CreateShoppingHistoryDto[]) {
    const d = [];
    for (const createShoppingHistoryDto of createShoppingHistoryDtoArr) {
      const insertItem = async () => {
        try {
          return await this.itemNamesRepository.save({
            name: createShoppingHistoryDto.name,
          });
        } catch (err) {
          return await this.itemNamesRepository.findOne({
            where: { name: createShoppingHistoryDto.name },
          });
        }
      };
      const insertPrice = async () => {
        const item = await insertItem();
        try {
          if (item)
            await this.pricesRepository.save({
              quantity: createShoppingHistoryDto.quantity,
              price: createShoppingHistoryDto.price,
              measurement: createShoppingHistoryDto.measurement,
              date: createShoppingHistoryDto.date,
              item: item,
            });
        } catch (err) {}
        return item;
      };

      const insertTag = async () => {
        for (const tagName of createShoppingHistoryDto.tags) {
          try {
            await this.tagsRepository.save({
              name: tagName,
            });
          } catch (err) {
            await this.tagsRepository.find({
              where: { name: tagName },
            });
          }
        }
        return await this.tagsRepository.find({
          where: { name: In(createShoppingHistoryDto.tags) },
        });
      };
      const [item, tag] = await Promise.all([insertPrice(), insertTag()]);
      try {
        await this.tagsItemRepository.save(
          tag.map((tagItem) => ({ item, tag: tagItem })),
        );
      } catch (err) {}

      d.push(item);
    }

    return d;
  }
  async createHistoryItem(createShoppingHistoryDto: CreateShoppingHistoryDto) {
    const items = await this.itemNamesRepository.query(
      'SELECT name, COUNT(*) \n' +
        'FROM items \n' +
        'GROUP BY name \n' +
        'HAVING COUNT(*) > 1;\n',
    );

    const insertItem = async () => {
      let item = await this.itemNamesRepository.findOne({
        where: { name: createShoppingHistoryDto.name },
      });
      if (!item) {
        item = await this.itemNamesRepository.save({
          name: createShoppingHistoryDto.name,
        });
      }
      return item;
    };
    const insertPrice = async () => {
      const item = await insertItem();
      let price: Price;
      try {
        if (item)
          price = await this.pricesRepository.save({
            quantity: createShoppingHistoryDto.quantity,
            price: createShoppingHistoryDto.price,
            measurement: createShoppingHistoryDto.measurement,
            date: createShoppingHistoryDto.date,
            item: item,
          });
      } catch (err) {
        price = await this.pricesRepository.findOne({
          where: { price: createShoppingHistoryDto.price, item: item },
        });
      }

      return { item, price };
    };

    const insertTag = async () => {
      for (const tagName of createShoppingHistoryDto.tags) {
        try {
          await this.tagsRepository.save({
            name: tagName,
          });
        } catch (err) {
          await this.tagsRepository.find({
            where: { name: tagName },
          });
        }
      }
      return await this.tagsRepository.find({
        where: { name: In(createShoppingHistoryDto.tags) },
      });
    };
    const [item, tag] = await Promise.all([insertPrice(), insertTag()]);
    try {
      await this.tagsItemRepository.save(
        tag.map((tagItem) => ({ item: item.item, tag: tagItem })),
      );
    } catch (err) {}
    try {
      const history = await this.historyRepository.save({
        item: item.item,
        price: item.price,
        createdAt: createShoppingHistoryDto.date,
      });
      console.log(history);
    } catch (err) {}
    return item;
  }

  async findAllItems() {
    const itemsFromDb = await this.itemNamesRepository.find({
      relations: { item: { tag: true } },
    });
    return itemsFromDb.map<ShoppingItem>((item) => {
      return {
        id: item.id,
        name: item.name,
        date: Date.now().toString(),
        tag: item.item.map((el) => el.tag),
        measurement: item.prices?.length
          ? item.prices[0]?.measurement
          : 'piece',
        price: item.prices?.length ? String(item.prices[0]?.price || 0) : '0',
        quantity: item.prices?.length ? item.prices[0]?.quantity : 1,
        total: item.prices?.length
          ? String(item.prices[0].price * item.prices[0].quantity)
          : String(0),
      };
    });
  }

  async findTags() {
    return await this.tagsRepository.find({});
  }

  update(id: number, updateShoppingHistoryDto: UpdateShoppingHistoryDto) {
    return `This action updates a #${id} shoppingHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingHistory`;
  }
}
