import { ApiProperty } from "@nestjs/swagger"

export class SellerDeleteType {
    constructor(){
        this.cpf = undefined
    }
    
    @ApiProperty()
    cpf: string
}