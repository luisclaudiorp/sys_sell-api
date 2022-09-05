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

    async getById(cpf: number){
        return await this.repository.findOne({where:{cpf: cpf}})
    }

    create(seller: SellerType){
        return this.repository.insert({name: seller.name, cpf: seller.cpf, createAt: new Date()})
    }

    update(seller: SellerUpdatType){
        return this.repository.update({cpf: seller.cpf}, 
            {name: seller.name, updatedAt: new Date()})
    }

    delete(seller: SellerDeleteType){
        return this.repository.delete({cpf: seller.cpf})
    }
}