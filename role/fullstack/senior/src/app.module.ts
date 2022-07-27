import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { mySQLModule } from './database'
import { AirportModule } from './airport/airport.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MYSQL_HOST: Joi.string().required(),
        MYSQL_PORT: Joi.string().required(),
        MYSQL_USER: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_DATABASE: Joi.string().required(),
        WHITE_LIST: Joi.string().required(),
        SERVER_SWAGGER: Joi.string().required(),
      })
    }),
    AirportModule,
    mySQLModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
