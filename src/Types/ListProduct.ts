import { ApiProperty } from "@nestjs/swagger";
import { ProductType } from "./ProductType";

export class ListProduct {
    constructor(){
        this.product = undefined
    }

    @ApiProperty()
    product: Array<ProductType>
}