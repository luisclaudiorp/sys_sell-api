import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm"
import { ProductEntity } from "./Product.entity"
import { SellerEntity } from "./Seller.entity"

@Entity('ORDER')
export class OrderEntity{
    @PrimaryColumn("int")
    id: number

    @Column()
    amount: number

    @Column()
    status: number

    @Column()
    quantities: number

    @Column({ type: 'int', width: 11, nullable: false, readonly: true})
    createdAt: number

    @Column({ type: 'int', width: 11, nullable: true,})
    updatedAt: number

    @ManyToOne(() => SellerEntity, (seller) => seller.cpf, {eager: true, onDelete: 'SET NULL'})
    @JoinColumn()
    seller: SellerEntity

    @ManyToMany(() => ProductEntity, (product)=> product.orders, {eager: true})
    @JoinTable()
    products: ProductEntity[]
}