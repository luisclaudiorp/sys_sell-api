import { Injectable } from "@nestjs/common";
import { ProductType } from "../Types/ProductType";
import { ProductResponse } from "../Types/ProductResponse";
import { ProductRepository } from "../Repository/Product.repository";

@Injectable()
export class ProductService{
    constructor(
        private readonly repository: ProductRepository
    ){}

    async get(product: ProductType): Promise<ProductResponse>{
        let response = new ProductResponse()
        try {
            const results = await this.repository.get(product)
            if(results.length > 0){
                response.listProduct.product = results.map((product)=> {
                    return product
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

    async create(product: ProductType): Promise<ProductResponse>{
        let response = new ProductResponse()
        try {
            const result = await this.repository.getById(product.id)
            if(!result){
                await this.repository.create(product)
                response.message = getMessageSucess('criado')
            }else{
                response.message = "Produto ja cadastrado."
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }

    async update(product: ProductType): Promise<ProductResponse>{
        let response = new ProductResponse()
        try {
            const result = await this.repository.getById(product.id)
            if(result){
                await this.repository.update(product)
                response.message = getMessageSucess('atualizado')
            }else{
                response.message = getMessageNot()
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }

    async delete(product: ProductType): Promise<ProductResponse>{
        let response = new ProductResponse()
        try {
            const result = await this.repository.getById(product.id)
            if(result){
                await this.repository.delete(product)
                response.message = getMessageSucess('deletado')
            }else{
                response.message = getMessageNot()
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }
}

function getMessageSucess(message: string): string {
    return `Produto ${message} com Sucesso!`
}

function getMessageNot(): string{
    return `Produto nao encontrado.`
}