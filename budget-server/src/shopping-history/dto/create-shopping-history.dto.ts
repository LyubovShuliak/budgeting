import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateShoppingHistoryDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'name', description: 'name' })
  name: string;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 10.56, description: 'Item price' })
  price: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'date', description: 'date' })
  date: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'tag', description: 'Item tags' })
  tags: string[];
}
