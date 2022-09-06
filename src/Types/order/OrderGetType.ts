import { ApiProperty } from "@nestjs/swagger"

export class OrderGetType {
    constructor(){
        this.status = undefined
        this.id = undefined
    }
    
    @ApiProperty({required: false})
    id: number

    @ApiProperty({required: false})
    status: number
}