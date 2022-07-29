import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  @ApiCreatedResponse({ status: 201, description: 'O motorista foi criado com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao registrar.'})
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Get()
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 404, description: 'Solicitação não encontrada.'})
  findAll() {
    return this.driverService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 404, description: 'Solicitação não encontrada.'})
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ status: 201, description: 'O motorista foi atualizada com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao atualizar.'})
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(+id, updateDriverDto);
  }

  @Delete(':id')
  @ApiOkResponse({ status: 201, description: 'O motorista foi removida com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao remover.'})
  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}
