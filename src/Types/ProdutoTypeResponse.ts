import { ApiProperty } from "@nestjs/swagger"
import { ProdutoType } from "./ProdutoType"

export class ProdutoTypeResponse {
    constructor(){
        this.message = undefined
        this.produto = undefined
    }

    @ApiProperty()
    message: string

    @ApiProperty()
    produto: ProdutoType
}