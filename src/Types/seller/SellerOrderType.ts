import { ApiProperty } from "@nestjs/swagger"

export class SellerOrderType {
    constructor(){
        this.cpf = undefined
    }

    @ApiProperty()
    cpf: string

}