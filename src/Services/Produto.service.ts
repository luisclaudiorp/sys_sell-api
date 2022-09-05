import { Injectable } from "@nestjs/common";
import { ProdutoType } from "../Types/ProdutoType";
import { ProdutoRepository } from "../Repository/Produto.repository";
import { ProdutoTypeResponse } from "../Types/ProdutoTypeResponse";

@Injectable()
export class ProdutoService{
    constructor(
        private readonly repository: ProdutoRepository
    ){}

    async get(produto: ProdutoType): Promise<ProdutoTypeResponse>{
        let response = new ProdutoTypeResponse()
        try {
            const results = await this.repository.get(produto)
            if(results.length > 0){
                response.listaProduto.produto = results.map((produto)=> {
                    return produto
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

    async create(produto: ProdutoType): Promise<ProdutoTypeResponse>{
        let response = new ProdutoTypeResponse()
        try {
            const result = await this.repository.getById(produto.id)
            if(!result){
                await this.repository.create(produto)
                response.message = getMessageSucess('criado')
            }else{
                response.message = "Produto ja cadastrado."
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }

    async update(produto: ProdutoType): Promise<ProdutoTypeResponse>{
        let response = new ProdutoTypeResponse()
        try {
            const result = await this.repository.getById(produto.id)
            if(result){
                await this.repository.update(produto)
                response.message = getMessageSucess('atualizado')
            }else{
                response.message = getMessageNot()
            }
        } catch (error) {
            response.message = error?.sqlMessage
        }
        return response
    }

    async delete(produto: ProdutoType): Promise<ProdutoTypeResponse>{
        let response = new ProdutoTypeResponse()
        try {
            const result = await this.repository.getById(produto.id)
            if(result){
                await this.repository.delete(produto)
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