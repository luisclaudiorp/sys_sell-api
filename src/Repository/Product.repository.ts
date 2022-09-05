import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "../Entities/Product.entity";
import { Repository } from "typeorm";
import { ProductType } from "../Types/ProductType";
import { ProductGetType } from "../Types/ProductGetType";
import { ProductDeleteType } from "../Types/ProductDeleteType";
import { ProductUpdatType } from "../Types/ProductUpdatType";

export class ProductRepository {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly repository: Repository<ProductEntity>
    ){}

    async get(product: ProductGetType){
        return await this.repository.find({where: product})
    }

    async getById(id: number){
        return await this.repository.findOne({where:{id: id}})
    }

    create(product: ProductType){
        return this.repository.insert({name: product.name, value: product.value, createAt: new Date()})
    }

    update(product: ProductUpdatType){
        return this.repository.update({id: product.id}, 
            {name: product.name, value: product.value, updatedAt: new Date()})
    }

    delete(product: ProductDeleteType){
        return this.repository.delete({id: product.id})
    }
}