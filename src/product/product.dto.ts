/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsEmpty,
  IsString,
  // IsNotEmpty,
  IsBoolean,
  IsNumber,
  IsOptional,
  ArrayMinSize,
  ValidateNested,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Category } from './product.enum';

export class Country {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNumber()
  price: number;
}

export class Price {
  @ApiProperty()
  basePrice: number;
}

export class ProductDto {
  @ApiProperty({
    description: 'name of the product',
    type: String,
    required: true,
  })
  @IsEmpty()
  @IsString()
  productName: string;
  @ApiProperty()
  @MaxLength(30)
  @MinLength(5)
  description: string;
  @ApiProperty({
    description: 'product active status',
    // type: Boolean,
    default: false,
  })
  @IsBoolean()
  isActive: boolean;
  @ApiProperty()
  price: Price;
  @ApiProperty({ type: [Country] })
  @Type(() => Country)
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  country: Country[];
  @ApiProperty()
  sallerName: string;
  @ApiProperty({ type: [Number] })
  @Type(() => Number)
  @ArrayMinSize(1)
  @ValidateNested({ each: true })

  mobile: number[];
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  sallerEmail: string;
  @ApiProperty()
  sallerPassword: string;
  @ApiProperty({ type: [String] })
  @Type(() => String)
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  keywords: string[];
  @ApiProperty()
  role: string;
  @ApiProperty({
    description: 'name of the product',
    // type  : Enumerator,
    // enum : Category,
    default: Category.NOT_DEFINED,
  })
  @IsEnum(Category)
  category: Category;
}
