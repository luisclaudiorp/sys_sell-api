import { ApiProperty } from "@nestjs/swagger"
import { SellerType } from "./SellerType"


export class SellerResponse {
    constructor(){
        this.message = undefined
        this.listSeller = undefined
    }

    @ApiProperty()
    message: string

    @ApiProperty()
    listSeller: SellerType
}