import { ApiProperty } from "@nestjs/swagger"
import { SellerType } from "./SellerType"

export class ListSeller{
    constructor(){
        this.seller = undefined
    }

    @ApiProperty()
    seller: Array<SellerType>
}