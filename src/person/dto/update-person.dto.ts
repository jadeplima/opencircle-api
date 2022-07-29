import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
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
