/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { productDto } from "./dto/user.dto";
import { productRepository } from "./user.repository";

@Injectable()

export class ProductService{
    constructor(private readonly userRepository : productRepository){}
    
    
        async findSingleProduct(productId : string) : Promise<any>
        {
           return this.userRepository.findSingleProduct(productId);
        }
    
        async productList() : Promise<any>
        {
        return  this.userRepository.productList();
        }
    
        async findSingleProductAndUpdate(productId : string , productBody : any): Promise<any>
        {
        return this.userRepository.findSingleProductAndUpdate(productId , productBody)
        }
    
        async addProduct(productBody : productDto): Promise<any>
        {
            console.log(productBody)
            return this.userRepository.addProduct(productBody)
        }
    
        async findSingleProductAndDelete(productId : string): Promise<any>
        {
            return this.userRepository.findSingleProductAndDelete( productId)
        }
}