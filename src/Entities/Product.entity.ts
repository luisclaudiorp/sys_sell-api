import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { OrderEntity } from "./Order.entity";

@Entity('PRODUCT')
export class ProductEntity{
    @PrimaryColumn("int")
    id: number

    @Column({nullable: false})
    name: string

    @Column({nullable: false, type: 'float'})
    value: number

    @Column({nullable: true})
    createAt: Date

    @Column({nullable: true})
    updatedAt: Date

    @ManyToMany(() => OrderEntity)
    @JoinTable()
    orders: OrderEntity[]
}