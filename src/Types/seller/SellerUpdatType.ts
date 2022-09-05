import { ApiProperty } from "@nestjs/swagger"

export class SellerUpdatType {
    constructor(){
        this.cpf = undefined
        this.name = undefined
    }
    
    @ApiProperty()
    name: string

    @ApiProperty()
    cpf: number
}