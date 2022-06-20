/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiFoundResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';
import { Product } from './product.interface';
import { productDto } from 'src/products/dto/user.dto';

@ApiTags('product-tag')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {
    console.log('from product controller');
  }

  @Get()
  @ApiOperation({
    summary: 'Get product list',
    description: 'Get list of products',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Product list got successfully',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @ApiNotFoundResponse({  status : 404 , description: 'No product is available',})
  async getProductList(): Promise<any> {
    return this.productService.getProductList();
  }

  @Get(':productId')
  @ApiOperation({
    summary: 'Get product details',
    description: 'Get a product details',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Product detail got successfully',
    // type : productDto[]
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @ApiNotFoundResponse({  status : 404 , description: 'No product is available with this product id',})

  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  async getProductById(@Param('productId') productId: string): Promise<any> {
    return this.productService.getProductById(productId);
  }

  @Post()
  @ApiOperation({
    summary: 'add product',
    description: 'Add new product product',
  })
  @ApiOkResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: productDto,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.'   })
  @ApiNotFoundResponse()
  @ApiBadRequestResponse({
    status : 400 , description : "bed request"  
  })
  async addProduct(@Body() productBody: ProductDto): Promise<any> {
    return this.productService.addProduct(productBody);
  }

  @Patch(':productId')
  @ApiOperation({
    summary: 'update a product',
    description: 'update product with product id',
  })
  @ApiOkResponse({
    status: 201,
    description: 'The record has been successfully updated.',
    type: productDto,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  async updateProduct(
    @Param('productId') productId: string,
    @Body() productBody: ProductDto,
  ): Promise<any> {
    return this.productService.updateProduct(productId, productBody);
  }

  @Delete(':productId')
  @ApiOperation({
    summary: 'delete product',
    description: 'delete a product',
  })
  @ApiOkResponse({
    status: 201,
    description: 'The record has been deleted successfully',
    type: productDto,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  async deleteProduct(@Param('productId') productId: string): Promise<any> {
    return this.productService.deleteProduct(productId);
  }
}
