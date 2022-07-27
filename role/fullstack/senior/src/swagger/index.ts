import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

const swagger = (app: INestApplication, configService: ConfigService) => {
  const configSwagger = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Admins')
    .setDescription('Api for management Admins')
    .setVersion('1.0')
    .addTag('Admins')
    .build()

  const document = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('api/docs', app, document)
}

export default swagger
