import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('SELLER')
export class SellerEntity{
    @PrimaryColumn({type: "bigint", nullable : false})
    cpf: number

    @Column({nullable: false})
    name: string

    @Column({nullable: true})
    createAt: Date

    @Column({nullable: true})
    updatedAt: Date
}