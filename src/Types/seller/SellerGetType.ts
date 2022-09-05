import { ApiProperty } from "@nestjs/swagger"

export class SellerGetType {
    constructor(){
        this.cpf = undefined
        this.name = undefined
    }
    
    @ApiProperty({required: false})
    name: string

    @ApiProperty({required: false})
    cpf: number
}