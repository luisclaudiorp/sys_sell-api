import { ApiProperty } from "@nestjs/swagger";
import { ProdutoType } from "./ProdutoType";

export class ListaProduto {
    constructor(){
        this.produto = undefined
    }

    @ApiProperty()
    produto: Array<ProdutoType>
}