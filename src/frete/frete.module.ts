import { Module } from '@nestjs/common';
import { FreteService } from './frete.service';
import { FreteController } from './frete.controller';

@Module({
  controllers: [FreteController],
  providers: [FreteService]
})
export class FreteModule {}
