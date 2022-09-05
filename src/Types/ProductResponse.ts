import { ApiProperty } from "@nestjs/swagger"
import { ListProduct } from "./ListProduct"


export class ProductResponse {
    constructor(){
        this.message = undefined
        this.listProduct = undefined
    }

    @ApiProperty()
    message: string

    @ApiProperty()
    listProduct: ListProduct
}