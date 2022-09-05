import { ApiProperty } from "@nestjs/swagger"

export class ProductDeleteType {
    constructor(){
        this.id = undefined
    }
    
    @ApiProperty()
    id: number
}