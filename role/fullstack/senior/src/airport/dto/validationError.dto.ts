import { ApiProperty } from '@nestjs/swagger'

export class ValidationError {
  @ApiProperty({ example: 0, description: 'HTTP Status Code', format: 'int32', type: 'integer' })
  statusCode: string

  @ApiProperty({ example: 0, description: 'Business Error Code (optional)', type: 'integer', format: 'int32' })
  errorCode: number

  @ApiProperty({ example: 'Invalid attribute', description: 'Error description (en_US)', type: 'integer', format: 'int32' })
  srcMessage: string

  @ApiProperty({ example: 'Atributo inválido', description: 'Translated error description', type: 'integer', format: 'int32' })
  translatedMessage: string
}
