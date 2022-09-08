import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "../Entities/Product.entity";
import { Repository } from "typeorm";
import { ProductType } from "../Types/product/ProductType";
import { ProductGetType } from "../Types/product/ProductGetType";
import { ProductDeleteType } from "../Types/product/ProductDeleteType";
import { ProductUpdatType } from "../Types/product/ProductUpdatType";

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
        let date = Math.floor(Date.now() / 1000)
        return this.repository.save({id: product.id, name: product.name, value: product.value, quantities: product.quantities, createdAt: date})
    }

    update(product: ProductUpdatType){
        let date = Math.floor(Date.now() / 1000)
        return this.repository.update({id: product.id}, 
            {name: product.name, value: product.value, quantities: product.quantities, updatedAt: date})
    }

    delete(product: ProductDeleteType){
        return this.repository.delete({id: product.id})
    }
}