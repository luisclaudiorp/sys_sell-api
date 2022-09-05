import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('PRODUTO')
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
}