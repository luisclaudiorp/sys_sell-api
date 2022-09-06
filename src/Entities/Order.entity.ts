import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm"
import { ProductEntity } from "./Product.entity"
import { SellerEntity } from "./Seller.entity"

@Entity('ORDER')
export class OrderEntity{
    @PrimaryColumn("int")
    id: number

    @Column()
    amount: number

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @Column()
    status: number

    @OneToMany(() => SellerEntity, (seller) => seller.cpf)
    seller: SellerEntity

    @ManyToMany(() => ProductEntity)
    @JoinTable()
    products: ProductEntity[]
}