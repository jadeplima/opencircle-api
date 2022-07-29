import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { DriverModule } from './driver/driver.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { CompanyModule } from './company/company.module';
import { ProductModule } from './product/product.module';
import { PedidoModule } from './pedido/pedido.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { FreteModule } from './frete/frete.module';


@Module({
  imports: [ClientModule, DriverModule, VehicleModule, CompanyModule, ProductModule, PedidoModule, PersonModule, FreteModule,
  
    //ConfigModule.forRoot(),
    //TypeOrmModule.forRoot({
      //type: 'postgres',
      //host: process.env.DB_HOST,
      //port: process.env.DB_PORT,
      //username: process.env.DB_USERNAME,
      //password: process.env.DB_PASSWORD,
      //database: process.env.DB_DATABSE,
      //entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
    //}),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
