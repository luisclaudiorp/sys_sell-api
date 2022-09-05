import { Query, Controller, Get, Post, Body, Put, Delete } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { SellerGetType } from "../Types/seller/SellerGetType";
import { SellerService } from "../Services/Seller.service";
import { SellerResponse } from "../Types/seller/SellerResponse";
import { SellerType } from "../Types/seller/SellerType";
import { SellerDeleteType } from "../Types/seller/SellerDeleteType";
import { SellerUpdatType } from "../Types/seller/SellerUpdatType";

@ApiTags('Seller')
@Controller('Seller')
export class SellerController {
    constructor(
        private readonly service: SellerService
    ){}
    
    @Get()
    async get(@Query() request: SellerGetType): Promise<SellerResponse>{
        return await this.service.get(request)
    }

    @Post()
    @ApiBody({type: SellerType})
    async create(@Body() request: SellerType): Promise<SellerResponse>{
        return await this.service.create(request)
    }

    @Put()
    @ApiBody({type: SellerUpdatType})
    async update(@Body() request: SellerUpdatType): Promise<SellerResponse>{
        return await this.service.update(request)
    }

    @Delete()
    @ApiBody({type: SellerDeleteType})
    async delete(@Body() request: SellerDeleteType): Promise<SellerResponse>{
        return await this.service.delete(request)
    }
}