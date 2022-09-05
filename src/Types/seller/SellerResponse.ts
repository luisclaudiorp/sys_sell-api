import { ApiProperty } from "@nestjs/swagger"
import { ListSeller } from "./ListSeller"

export class SellerResponse {
    constructor(){
        this.message = undefined
        this.listSeller = undefined
    }

    @ApiProperty()
    message: string

    @ApiProperty()
    listSeller: ListSeller
}