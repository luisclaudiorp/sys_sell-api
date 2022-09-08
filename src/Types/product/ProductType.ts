import { ApiProperty } from "@nestjs/swagger"

export class ProductType {
    constructor(){
        this.id = undefined
        this.name = undefined
        this.value = undefined
        this.quantities = undefined
        this.createdAt = undefined
        this.updatedAt = undefined
    }

    @ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty()
    value: number
    
    @ApiProperty()
    quantities: number

    createdAt: number

    updatedAt: number
}