import { ApiProperty } from "@nestjs/swagger"

export class ProductGetType {
    constructor(){
        this.name = undefined
        this.id = undefined
    }
    
    @ApiProperty({required: false})
    name: string

    @ApiProperty({required: false})
    id: number
}