import { ApiProperty } from "@nestjs/swagger"

export class ProductType {
    constructor(){
        this.name = undefined
        this.value = undefined
    }
    
    @ApiProperty()
    name: string

    @ApiProperty()
    id: number

    @ApiProperty()
    value: number

    @ApiProperty()
    createAt: Date

    @ApiProperty()
    updatedAt: Date
}