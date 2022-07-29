import { ApiProperty } from "@nestjs/swagger"

export class CreateVehicleDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    idMotorista: number

    @ApiProperty()
    capacidade: number

    @ApiProperty()
    altura: number

    @ApiProperty()
    largura: number

    @ApiProperty()
    comprimento: number

    @ApiProperty()
    pesoTotal: number

}
