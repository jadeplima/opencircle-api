import { ApiProperty } from "@nestjs/swagger"

export class CreateCompanyDto {
    @ApiProperty()
    codigoFrete: number

    @ApiProperty()
    data: Date
}
