import { ApiProperty } from "@nestjs/swagger"

export class ProductType {
    constructor(){
        this.name = undefined
        this.value = undefined
    }
    
    @ApiProperty()
    name: string

    @ApiProperty()
    value: number
    
    @ApiProperty()
    id: number

    createAt: Date

    updatedAt: Date
}