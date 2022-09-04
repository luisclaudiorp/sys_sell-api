import { Injectable } from "@nestjs/common";
import { ProdutoType } from "../Types/ProdutoType";
import { ProdutoRepository } from "../Repository/Produto.repository";
import { ProdutoTypeResponse } from "src/Types/ProdutoTypeResponse";

@Injectable()
export class ProdutoService{
    constructor(
        private readonly repository: ProdutoRepository
    ){}

    async get(): Promise<ProdutoTypeResponse>{
        let response = new ProdutoTypeResponse()
        try {
            const results = await this.repository.get()
            if(results){
                
            }
            return response
        } catch (error) {
            throw new Error(error?.message)
        }
    }

    async create(produto: ProdutoType){
        try {
            const result = await this.repository.getById(produto.id)

        } catch (error) {
            throw new Error(error?.message)
        }
    }

    async update(produto: ProdutoType){
        try {
            
        } catch (error) {
            throw new Error(error?.message)
        }
    }

    async delete(produto: ProdutoType){
        try {
            
        } catch (error) {
            throw new Error(error?.message)
        }
    }
}