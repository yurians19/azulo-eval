import { ApiProperty } from '@nestjs/swagger'

export class NotFoundError {
  @ApiProperty({ example: 'The requested resource or path can not be found' })
  description: string

  @ApiProperty({ example: 0, description: 'HTTP Status Code', format: 'int32', type: 'integer' })
  statusCode: string

  @ApiProperty({ example: 0, description: 'Business Error Code (optional)', type: 'integer', format: 'int32' })
  errorCode: number

  @ApiProperty({ example: 'Resource not found', description: 'Error description (en_US)', type: 'integer', format: 'int32' })
  srcMessage: string

  @ApiProperty({ example: 'Recurso no encontrado', description: 'Translated error description', type: 'integer', format: 'int32' })
  translatedMessage: string
}
