import { ApiProperty } from "@nestjs/swagger";
import { OrderType } from "./OrderType";

export class ListOrder {
    constructor(){
        this.order = undefined
    }

    @ApiProperty()
    order: Array<OrderType>
}