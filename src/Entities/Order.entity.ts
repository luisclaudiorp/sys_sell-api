import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn } from "typeorm"
import { ProductEntity } from "./Product.entity"
import { SellerEntity } from "./Seller.entity"

@Entity('ORDER')
export class OrderEntity{
    @PrimaryColumn("int")
    id: number

    @Column()
    amount: number

    @Column()
    seller: number

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @Column()
    status: number

    @ManyToMany(() => SellerEntity)
    @JoinColumn()
    sellers: SellerEntity[]

    @ManyToMany(() => ProductEntity)
    @JoinTable()
    products: ProductEntity[]
}