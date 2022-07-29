import { ApiProperty } from "@nestjs/swagger"

export class CreateDriverDto {
    @ApiProperty()
    idPessoa: number

    @ApiProperty()
    idVeiculo: number

    @ApiProperty()
    idTransportadora: number
    
    @ApiProperty()
    status: boolean
}
