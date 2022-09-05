import { ApiProperty } from "@nestjs/swagger"

export class ProductDeleteType {
    constructor(){
        this.cpf = undefined
    }
    
    @ApiProperty()
    cpf: number
}