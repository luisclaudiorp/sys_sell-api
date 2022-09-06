import { ApiProperty } from "@nestjs/swagger"
import { ProductType } from "../product/ProductType"
import { SellerType } from "../seller/SellerType"

export class OrderUpdatType {
    constructor(){
        this.amount = undefined
        this.seller = undefined
        this.status = undefined
        this.products = undefined
    }
    
    @ApiProperty()
    amount: number

    @ApiProperty()
    status: number

    @ApiProperty()
    seller: SellerType

    @ApiProperty()
    products: ProductType[]

    @ApiProperty()
    id: number
}