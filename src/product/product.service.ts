/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './product.dto';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product-saller') private productModel: Model<Product>,
  ) {}

  async addProduct(productBody: ProductDto): Promise<any> {
    console.log('saller body', productBody);
    const product = new this.productModel(productBody);
    // try {
      return await product.save();
    /* } catch (err) {
    //   console.log(err);
    //   throw new HttpException({ err: err }, HttpStatus.BAD_REQUEST);
    }*/ 
  }

  async getProductList(): Promise<any> {
    try {
      return this.productModel.find();
    } catch (err) {
      console.log(err);
      throw new HttpException({ err: err }, HttpStatus.BAD_REQUEST);
    }
  }

  async getProductById(productId: string): Promise<any> {
    try {
      const found = await this.productModel.findById(productId);
      return found;
    } catch (err) {
      console.log(err);
      throw new HttpException({ err: err }, HttpStatus.BAD_REQUEST);
    }
  }

  async updateProduct(
    productId: string,
    productBody: ProductDto,
  ): Promise<any> {
    try {
      return this.productModel.findOneAndUpdate(
        { _id: productId },
        productBody,
        {
          upsert: true,
        },
      );
    } catch (err) {
      console.log(err);
      throw new HttpException({ err: err }, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteProduct(productId: string): Promise<any> {
    try {
      return this.productModel.findOneAndDelete({ _id: productId });
    } catch (err) {
      console.log(err);
      throw new HttpException({ err: err }, HttpStatus.BAD_REQUEST);
    }
  }
}
