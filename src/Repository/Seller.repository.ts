import { InjectRepository } from "@nestjs/typeorm";
import { SellerEntity } from "../Entities/Seller.entity";
import { Repository } from "typeorm";
import { SellerType } from "../Types/seller/SellerType";
import { SellerGetType } from "../Types/seller/SellerGetType";
import { SellerUpdatType } from "../Types/seller/SellerUpdatType";
import { SellerDeleteType } from "../Types/seller/SellerDeleteType";

export class SellerRepository {
    constructor(
        @InjectRepository(SellerEntity)
        private readonly repository: Repository<SellerEntity>
    ){}

    async get(seller: SellerGetType){
        return await this.repository.find({where: seller})
    }

    async getById(cpf: string){
        return await this.repository.findOne({where:{cpf: cpf}})
    }

    create(seller: SellerType){
        let date = Math.floor(Date.now() / 1000)
        return this.repository.save({name: seller.name, cpf: seller.cpf, createdAt: date})
    }

    update(seller: SellerUpdatType){
        let date = Math.floor(Date.now() / 1000)
        return this.repository.update({cpf: seller.cpf}, 
            {name: seller.name, updatedAt: date})
    }

    delete(seller: SellerDeleteType){
        return this.repository.delete({cpf: seller.cpf})
    }
}