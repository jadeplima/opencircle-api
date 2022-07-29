import { ApiProperty } from "@nestjs/swagger"

export class Client {
    @ApiProperty()
    id: number

    @ApiProperty()
    nome: string

    @ApiProperty()
    telefone: string

    @ApiProperty()
    endereco: string

    @ApiProperty()
    cep: number

    @ApiProperty()
    email: string

    @ApiProperty()
    senha: string
}
