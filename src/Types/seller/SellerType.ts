import { ApiProperty } from "@nestjs/swagger"

export class SellerType {
    constructor(){
        this.cpf = undefined
        this.name = undefined
    }

    @ApiProperty()
    cpf: string

    @ApiProperty()
    name: string

    createdAt: number

    updatedAt: number
}