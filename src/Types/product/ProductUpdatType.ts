import { ApiProperty } from "@nestjs/swagger"

export class ProductUpdatType {
    constructor(){
        this.name = undefined
        this.value = undefined
        this.quantities = undefined
    }
    
    @ApiProperty()
    name: string

    @ApiProperty()
    value: number

    @ApiProperty()
    id: number

    @ApiProperty()
    quantities: number
}