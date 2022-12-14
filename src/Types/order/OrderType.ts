import { ApiProperty } from "@nestjs/swagger"
import { ProductType } from "../product/ProductType"
import { SellerOrderType } from "../seller/SellerOrderType"

export class OrderType {
    constructor(){
        this.amount = undefined
        this.id = undefined
        this.status = undefined
        this.seller = undefined
    }
    
    @ApiProperty()
    id: number

    amount: number

    @ApiProperty()
    status: number

    quantities: number

    @ApiProperty()
    seller: SellerOrderType

    @ApiProperty()
    products: ProductType[]

    createdAt: number

    updatedAt: number
}