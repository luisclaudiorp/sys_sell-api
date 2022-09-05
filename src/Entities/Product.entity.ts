import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('PRODUTO')
export class ProductEntity{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({nullable: false})
    name: string

    @Column({nullable: false, type: 'float'})
    value: number

    @Column()
    createAt: Date

    @Column()
    updatedAt: Date
}