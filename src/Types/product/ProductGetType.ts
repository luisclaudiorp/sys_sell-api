import { ApiProperty } from "@nestjs/swagger"

export class ProductGetType {
    constructor(){
        this.name = undefined
        this.id = undefined
        this.quantities = undefined
    }
    
    @ApiProperty({required: false})
    name: string

    @ApiProperty({required: false})
    id: number

    @ApiProperty({required: false})
    quantities: number
}