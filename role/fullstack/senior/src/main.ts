import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { config } from 'aws-sdk';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';
import * as morgan from 'morgan';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: ['error', 'warn']
  });
  app.use(morgan('tiny'));
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: configService.get('WHITE_LIST').split(';'),
  });
  config.update({
    accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
    region: configService.get('AWS_REGION'),
  });
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
  const serverSwagger = configService.get('SERVER_SWAGGER').split(';');

  const configSwagger = new DocumentBuilder()
    .setTitle('Files')
    .setDescription('Api for management files')
    .setVersion('1.0')
    .addTag('files')
    .addServer(serverSwagger[0])
    .addServer(serverSwagger[1])
    .addServer(serverSwagger[2])
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api-docs', app, document);

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`, `'unsafe-inline'`],
          imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
        },
      },
    }),
  );
  app.use(function (err, req, res, next){
    console.log('Filter')
    next()

  })
  await app.listen(configService.get('PORT_API') || 3001);
}
bootstrap();
