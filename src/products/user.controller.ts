/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { productDto } from "./dto/user.dto";
import { ProductService} from "./user.service";

@Controller("product")
export class ab
{
    constructor(private readonly userService : ProductService){}
    @Get(":productId")
    async findSingleProduct(@Param("productId") productId : string ) : Promise<any>
    {
        console.log("single product api" , productId)
       return this.userService.findSingleProduct(productId);
    }
    @Get()
    async productList() : Promise<any>
    {
    return  this.userService.productList();
    }
    @Patch(":productId")
    async findSingleProductAndUpdate(@Param("productId") productId : string  , @Body() productBody : productDto): Promise<any>
    {
        console.log("api hitted " ,  productId , productBody )
    return this.userService.findSingleProductAndUpdate(productId , productBody)
    }
    @Post()
    async addProduct(@Body() productBody : productDto): Promise<any>
    {
        return this.userService.addProduct(productBody)
    }
    @Delete(":productId")
    async findSingleProductAndDelete(@Param("productId") productId : string ): Promise<any>
    {
        return this.userService.findSingleProductAndDelete(productId)
    }
}