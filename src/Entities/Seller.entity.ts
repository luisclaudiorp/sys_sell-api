import { Column, Entity, ManyToMany,  PrimaryColumn } from "typeorm";
import { OrderEntity } from "./Order.entity";

@Entity('SELLER')
export class SellerEntity{
    @PrimaryColumn({ nullable : false})
    cpf: string

    @Column({nullable: false})
    name: string

    @Column({nullable: true})
    createAt: Date

    @Column({nullable: true})
    updatedAt: Date

    @ManyToMany(() => OrderEntity)
    orders: OrderEntity[]
}