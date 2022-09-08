import { Column, Entity, OneToMany,  PrimaryColumn } from "typeorm";
import { OrderEntity } from "./Order.entity";

@Entity('SELLER')
export class SellerEntity{
    @PrimaryColumn({ nullable : false})
    cpf: string

    @Column({nullable: false})
    name: string
    
    @Column({ type: 'int', width: 11, nullable: false, readonly: true})
    createdAt: number

    @Column({ type: 'int', width: 11, nullable: true,})
    updatedAt: number

    @OneToMany(() => OrderEntity, (order) => order.id)
    orders: OrderEntity[]
}