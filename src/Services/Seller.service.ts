import { Injectable } from "@nestjs/common";
import { SellerType } from "../Types/seller/SellerType";
import { SellerResponse } from "../Types/seller/SellerResponse";
import { SellerRepository } from "../Repository/Seller.repository";
import { SellerGetType } from "../Types/seller/SellerGetType";
import { SellerDeleteType } from "../Types/seller/SellerDeleteType";
import { ListSeller } from "../Types/seller/ListSeller";
import { SellerUpdatType } from "../Types/seller/SellerUpdatType";
import { SellerConverter } from "src/converter/SellerConverter";

@Injectable()
export class SellerService{
    constructor(
        private readonly repository: SellerRepository
    ){}

    async get(seller: SellerGetType): Promise<SellerResponse>{
        let response = new SellerResponse()
        try {
            const results = await this.repository.get(seller)
            if(results.length > 0){
                response.listSeller = new ListSeller()
                response.listSeller.seller = results.map((seller)=> {
                    let sellerentity = SellerConverter.convertEntityToResponse(seller)
                    return sellerentity
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

    async create(seller: SellerType): Promise<SellerResponse>{
        let response = new SellerResponse()
        try {
            const result = await this.repository.getById(seller.cpf)
            if(!result){
                await this.repository.create(seller)
                response.message = getMessageSucess('criado')
            }else{
                response.message = "Vendedor ja cadastrado."
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }

    async update(seller: SellerUpdatType): Promise<SellerResponse>{
        let response = new SellerResponse()
        try {
            const result = await this.repository.getById(seller.cpf)
            if(result){
                await this.repository.update(seller)
                response.message = getMessageSucess('atualizado')
            }else{
                response.message = getMessageNot()
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }

    async delete(seller: SellerDeleteType): Promise<SellerResponse>{
        let response = new SellerResponse()
        try {
            const result = await this.repository.getById(seller.cpf)
            if(result){
                await this.repository.delete(seller)
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
    return `Vendedor ${message} com Sucesso!`
}

function getMessageNot(): string{
    return `Vendedor nao encontrado.`
}