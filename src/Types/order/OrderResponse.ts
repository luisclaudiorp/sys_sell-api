import { ApiProperty } from "@nestjs/swagger"
import { ListOrder } from "./ListOrder"


export class OrderResponse {
    constructor(){
        this.message = undefined
        this.listOrder = undefined
    }

    @ApiProperty()
    message: string

    @ApiProperty()
    listOrder: ListOrder
}