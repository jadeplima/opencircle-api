import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
@ApiResponse({ status: 201, description: 'O pedido foi criado com sucesso.'})
@ApiResponse({ status: 403, description: 'Erro ao solicitar o pedido.'})
async create(@Body() createPedidoDto: CreatePedidoDto) {
  this.pedidoService.create(createPedidoDto);

}

  @Get()
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 404, description: 'Solicitação não encontrada.'})
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 404, description: 'Solicitação não encontrada.'})
  findOne(@Param('id') id: string) {
    return this.pedidoService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ status: 201, description: 'O pedido foi atualizada com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao atualizar.'})
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoService.update(+id, updatePedidoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ status: 201, description: 'O pedido foi removida com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao remover.'})
  remove(@Param('id') id: string) {
    return this.pedidoService.remove(+id);
  }
}
