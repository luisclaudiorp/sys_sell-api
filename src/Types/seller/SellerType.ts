import { ApiProperty } from "@nestjs/swagger"

export class SellerType {
    constructor(){
        this.cpf = undefined
        this.name = undefined
    }

    @ApiProperty()
    cpf: number

    @ApiProperty()
    name: string

    createAt: Date

    updatedAt: Date
}