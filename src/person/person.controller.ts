import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('person')
@ApiTags('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
@ApiCreatedResponse({ status: 201, description: 'A Pessoa foi criado com sucesso.'})
@ApiBadRequestResponse({ status: 400, description: 'Erro ao registrar.'})
async create(@Body() createPersonDto: CreatePersonDto) {
  this.personService.create(createPersonDto);
}

  @Get()
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 404, description: 'Solicitação não encontrada.'})
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 403, description: 'Solicitação não encontrada.'})
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ status: 201, description: 'A Pessoa foi atualizada com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao atualizar.'})
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  @ApiOkResponse({ status: 201, description: 'A Pessoa foi removida com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao remover.'})
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
