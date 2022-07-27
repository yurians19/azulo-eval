import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AirportController } from './airport.controller';
import { AirportRowRepository } from './airport.repository';
import { AirportService } from './airport.service';
import { 
  Airport as AirportEntity,
  AiportOperator as AiportOperatorEntity
 } from './entities'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AirportEntity,
      AiportOperatorEntity
    ]),
    HttpModule
  ],
  controllers: [AirportController],
  exports: [TypeOrmModule],
  providers: [AirportService, ConfigService,AirportRowRepository],
})
export class AirportModule {}
