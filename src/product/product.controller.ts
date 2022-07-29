import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiCreatedResponse({ status: 201, description: 'Produto criado com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao registrar produto.'})
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 404, description: 'Solicitação não encontrada.'})
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ status: 201, description: 'OK.'})
  @ApiNotFoundResponse({ status: 404, description: 'Solicitação não encontrada.'})
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ status: 201, description: 'O produto foi atualizado com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao atualizar.'})
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ status: 201, description: 'O produto foi removido com sucesso.'})
  @ApiBadRequestResponse({ status: 400, description: 'Erro ao remover.'})
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
