import { ApiProperty } from "@nestjs/swagger"

export class CreatePersonDto {

    
    @ApiProperty()
    login: string

    @ApiProperty()
    senha: string

    @ApiProperty()
    nome: string

    @ApiProperty()
    role: string

    @ApiProperty()
    cpf: number
}
