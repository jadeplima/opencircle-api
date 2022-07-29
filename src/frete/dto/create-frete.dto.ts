import { ApiProperty } from "@nestjs/swagger"

export class CreateFreteDto {

    @ApiProperty()
    cep:number

    @ApiProperty()
	quilometro:number

    @ApiProperty()
	volumeCarga:number
	
}
