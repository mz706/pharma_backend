/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "../../product/product.interface"

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private productModel: Model<Product>
  ) {}

  async addProduct() : Promise<any>
    {
       const product = new this.productModel({
        title : "hi",
        description : "hi",
        isActive : true,
        price : {
            basePrice : 330
        },
        contry : [{
            name : "india",
            price : 344
        }]
       });

       await product.save();

    }

    async getProductList() : Promise<any>
    {
       return this.productModel.find();
    }


}