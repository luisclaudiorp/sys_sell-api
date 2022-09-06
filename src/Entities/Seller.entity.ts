import { Column, Entity, OneToMany,  PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToMany(() => OrderEntity, (order) => order.id)
    orders: OrderEntity[]
}