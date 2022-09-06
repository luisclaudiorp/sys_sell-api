import { ApiProperty } from "@nestjs/swagger"

export class OrderDeleteType {
    constructor(){
        this.id = undefined
    }
    
    @ApiProperty()
    id: number
}