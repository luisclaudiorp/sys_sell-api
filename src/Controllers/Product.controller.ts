import { Query, Controller, Get, Post, Body, Put, Delete } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { ProductGetType } from "../Types/product/ProductGetType";
import { ProductService } from "../Services/Product.service";
import { ProductResponse } from "../Types/product/ProductResponse";
import { ProductType } from "../Types/product/ProductType";
import { ProductDeleteType } from "../Types/product/ProductDeleteType";
import { ProductUpdatType } from "../Types/product/ProductUpdatType";

@ApiTags('Product')
@Controller('Product')
export class ProductController {
    constructor(
        private readonly service: ProductService
    ){}
    
    @Get()
    async get(@Query() request: ProductGetType): Promise<ProductResponse>{
        return await this.service.get(request)
    }

    @Post()
    @ApiBody({type: ProductType})
    async create(@Body() request: ProductType): Promise<ProductResponse>{
        return await this.service.create(request)
    }

    @Put()
    @ApiBody({type: ProductUpdatType})
    async update(@Body() request: ProductUpdatType): Promise<ProductResponse>{
        return await this.service.update(request)
    }

    @Delete()
    @ApiBody({type: ProductDeleteType})
    async delete(@Body() request: ProductDeleteType): Promise<ProductResponse>{
        return await this.service.delete(request)
    }
}