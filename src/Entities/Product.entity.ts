import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { OrderEntity } from "./Order.entity";

@Entity('PRODUCT')
export class ProductEntity{
    @PrimaryColumn("int")
    id: number

    @Column({nullable: false})
    name: string

    @Column({nullable: false, type: 'float'})
    value: number
    
    @Column({default: 0})
    quantities: number

    @Column({ type: 'int', width: 11, nullable: false, readonly: true})
    createdAt: number

    @Column({ type: 'int', width: 11, nullable: true,})
    updatedAt: number

    @ManyToMany(() => OrderEntity, (order) => order.products)
    orders: OrderEntity[]
}