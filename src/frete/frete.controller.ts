import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FreteService } from './frete.service';
import { CreateFreteDto } from './dto/create-frete.dto';
import { UpdateFreteDto } from './dto/update-frete.dto';

@Controller('frete')
export class FreteController {
  constructor(private readonly freteService: FreteService) {}

  @Post()
  create(@Body() createFreteDto: CreateFreteDto) {
    return this.freteService.create(createFreteDto);
  }

  @Get()
  findAll() {
    return this.freteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFreteDto: UpdateFreteDto) {
    return this.freteService.update(+id, updateFreteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freteService.remove(+id);
  }
}
