import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "../Entities/Produto.entity";
import { Repository } from "typeorm";
import { ProdutoType } from "../Types/ProdutoType";

export class ProdutoRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly repository: Repository<ProdutoEntity>
    ){}

    async get(){
        return await this.repository.find()
    }

    async getById(id: number){
        return await this.repository.findOne({where:{id: id}})
    }

    create(produto: ProdutoType){
        return this.repository.insert(produto)
    }

    update(produto: ProdutoType){
        return this.repository.update({id: produto.id}, 
            {name: produto.name, value: produto.value, updatedAt: new Date()})
    }

    delete(produto: ProdutoType){
        return this.repository.delete({id: produto.id})
    }
}