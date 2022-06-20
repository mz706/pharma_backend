/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { productDto } from "./dto/user.dto";
import { User, userDocument } from "./user.schema";

@Injectable()
export class productRepository
{
    constructor(@InjectModel( User.name ) private userModel : Model<userDocument>){}

    async findSingleProduct(productId : string ) : Promise<any>
    {
       return this.userModel.findOne({ productId });
    }

    async productList() : Promise<any>
    {
    return  this.userModel.find();
    }

    async findSingleProductAndUpdate(productId : string , productBody : any): Promise<any>
    {
    return this.userModel.findOneAndUpdate({ _id : productId } , productBody)
    }

    async addProduct(productBody : productDto): Promise<any>
    {
        const { title , description , price } = productBody
        // console.log()
        const product = new this.userModel({ title , description , price  })
        return product.save()
    }

    async findSingleProductAndDelete(productId): Promise<any>
    {
        return this.userModel.findOneAndDelete(productId)
    }
    
}