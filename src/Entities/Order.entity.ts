import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
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

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => SellerEntity, (seller) => seller.cpf, {eager: true, onDelete: 'SET NULL'})
    @JoinColumn()
    seller: SellerEntity

    @ManyToMany(() => ProductEntity, (product)=> product.orders, {eager: true})
    @JoinTable()
    products: ProductEntity[]
}