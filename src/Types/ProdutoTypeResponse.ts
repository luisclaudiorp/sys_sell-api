import { ApiProperty } from "@nestjs/swagger"
import { ListaProduto } from "./ListaProduto"

export class ProdutoTypeResponse {
    constructor(){
        this.message = undefined
        this.listaProduto = undefined
    }

    @ApiProperty()
    message: string

    @ApiProperty()
    listaProduto: ListaProduto
}