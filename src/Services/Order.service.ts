import { Injectable } from "@nestjs/common";
import { OrderType } from "../Types/order/OrderType";
import { OrderResponse } from "../Types/order/OrderResponse";
import { OrderRepository } from "../Repository/Order.repository";
import { OrderGetType } from "../Types/order/OrderGetType";
import { OrderDeleteType } from "../Types/order/OrderDeleteType";
import { ListOrder } from "../Types/order/ListOrder";
import { OrderUpdatType } from "../Types/order/OrderUpdatType";
import { ProductRepository } from "../Repository/Product.repository";
import { OrderConverter } from "../converter/OrderConverter";
import { SendMailProducerService } from "../jobs/SendMail-producer-service";


@Injectable()
export class OrderService{
    constructor(
        private readonly repository: OrderRepository,
        private readonly repositoryProduct: ProductRepository,
        private readonly sendMailService: SendMailProducerService
    ){}

    async get(order: OrderGetType): Promise<OrderResponse>{
        let response = new OrderResponse()
        try {
            const results = await this.repository.get(order)
            if(results.length > 0){
                response.listOrder = new ListOrder()
                response.listOrder.order = results.map((order)=> {
                    let orderType = OrderConverter.convertEntityToResponse(order)
                    return orderType
                })
                response.message = "Sucesso"
            }else{
                response.message = getMessageNot()
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }

    async create(order: OrderType): Promise<OrderResponse>{
        let response = new OrderResponse()
        try {
            const result = await this.repository.getById(order?.id)
            if(!result && order?.products?.length > 0){
                const { amount, quantities } = await this.getAmount(order)
                order.amount = amount
                order.quantities = quantities
                //await this.repository.create(order)
                response.message = getMessageSucess('criada')
                this.sendMailService.sendMail(order)
            }else{
                response.message = "Compra ja cadastrado."
            }
        } catch (error) {
            if(error?.sqlMessage){
                response.message = error?.sqlMessage
            }else{
                response.message = error?.message
            }
        }
        return response
    }

    async update(order: OrderUpdatType): Promise<OrderResponse>{
        let response = new OrderResponse()
        try {
            const result = await this.repository.getById(order?.id)
            if(result){
                await this.repository.update(order)
                response.message = getMessageSucess('atualizada')
            }else{
                response.message = getMessageNot()
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }

    async delete(order: OrderDeleteType): Promise<OrderResponse>{
        let response = new OrderResponse()
        try {
            const result = await this.repository.getById(order?.id)
            if(result){
                await this.repository.delete(order)
                response.message = getMessageSucess('deletada')
            }else{
                response.message = getMessageNot()
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }

    async getAmount(order: OrderType): Promise<{ amount: number, quantities: number }>{
        let amount = 0
        let quantities = 0
        for (const product of order?.products) {
            quantities = quantities + product.quantities
            const getProduct = await this.repositoryProduct.getById(product?.id)
            if(getProduct){
                amount = amount + (product?.quantities * getProduct?.value)
            }else{
                throw new Error(`Um produto da lista nao foi encontrado: Codigo [${product?.id}]`);
            }
        }
        return { amount, quantities }
    }
}

function getMessageSucess(message: string): string {
    return `Compra ${message} com Sucesso!`
}

function getMessageNot(): string{
    return `Compra nao encontrada.`
}

