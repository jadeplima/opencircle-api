import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @ApiCreatedResponse({ status: 201, description: 'A Pessoa foi criado com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao registrar.'})
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 403, description: 'Solicitação não encontrada.'})
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 403, description: 'Solicitação não encontrada.'})
  findOne(@Param('id') id: string) {
    return this.vehicleService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ status: 201, description: 'A Pessoa foi atualizada com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao atualizar.'})
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.update(+id, updateVehicleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ status: 201, description: 'A Pessoa foi removida com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao remover.'})
  remove(@Param('id') id: string) {
    return this.vehicleService.remove(+id);
  }
}
