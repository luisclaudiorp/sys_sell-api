import { InjectRepository } from "@nestjs/typeorm";
import { OrderEntity } from "../Entities/Order.entity";
import { Repository } from "typeorm";
import { OrderType } from "../Types/order/OrderType";
import { OrderGetType } from "../Types/order/OrderGetType";
import { OrderUpdatType } from "../Types/order/OrderUpdatType";
import { OrderDeleteType } from "../Types/order/OrderDeleteType";

export class OrderRepository {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly repository: Repository<OrderEntity>
    ){}

    async get(order: OrderGetType){
        return await this.repository.find({where: order})
    }

    async getById(id: number){
        return await this.repository.findOne({where:{id: id}})
    }

    create(order: OrderType){
        let date = Math.floor(Date.now() / 1000)
        return this.repository.save({
           id: order.id, amount: order.amount, status: order.status, seller: order.seller, products: order.products, createdAt: date, quantities: order.quantities })
    }

    update(order: OrderUpdatType){
        let date = Math.floor(Date.now() / 1000)
        return this.repository.update({id: order.id}, 
            { amount: order.amount, status: order.status, seller: order.seller, products: order.products, updatedAt: date, quantities: order.quantities })
    }

    delete(order: OrderDeleteType){
        return this.repository.delete({ id: order.id })
    }
}