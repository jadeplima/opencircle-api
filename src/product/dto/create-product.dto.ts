import { ApiProperty } from "@nestjs/swagger"

export class CreateProductDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    nome: string

    @ApiProperty()
    preco: number

    
}
