import { HttpStatus } from '@nestjs/common'

export const httpExceptionInvalidAttribute = {
  statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  errorCode: HttpStatus.UNPROCESSABLE_ENTITY,
  srcMessage: 'Invalid attribute',
  translatedMessage: 'Atributo inválido',
}
