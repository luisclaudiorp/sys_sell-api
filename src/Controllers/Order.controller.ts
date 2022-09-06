import { Query, Controller, Get, Post, Body, Put, Delete } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { OrderGetType } from "../Types/order/OrderGetType";
import { OrderService } from "../Services/Order.service";
import { OrderResponse } from "../Types/order/OrderResponse";
import { OrderType } from "../Types/order/OrderType";
import { OrderDeleteType } from "../Types/order/OrderDeleteType";
import { OrderUpdatType } from "../Types/order/OrderUpdatType";

@ApiTags('Order')
@Controller('Order')
export class OrderController {
    constructor(
        private readonly service: OrderService
    ){}
    
    @Get()
    async get(@Query() request: OrderGetType): Promise<OrderResponse>{
        return await this.service.get(request)
    }

    @Post()
    @ApiBody({type: OrderType})
    async create(@Body() request: OrderType): Promise<OrderResponse>{
        return await this.service.create(request)
    }

    @Put()
    @ApiBody({type: OrderUpdatType})
    async update(@Body() request: OrderUpdatType): Promise<OrderResponse>{
        return await this.service.update(request)
    }

    @Delete()
    @ApiBody({type: OrderDeleteType})
    async delete(@Body() request: OrderDeleteType): Promise<OrderResponse>{
        return await this.service.delete(request)
    }
}