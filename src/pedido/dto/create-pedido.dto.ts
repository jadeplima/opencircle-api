import { ApiProperty } from "@nestjs/swagger"

export class CreatePedidoDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    status: string

    @ApiProperty()
    data: Date

    @ApiProperty()
    codigoCliente: number
}
