import { HttpStatus } from '@nestjs/common'

export const httpExceptionNotAlowed = {
  statusCode: HttpStatus.FORBIDDEN,
  errorCode: HttpStatus.FORBIDDEN,
  srcMessage: 'Action not allowed',
  translatedMessage: 'Accion no permitida',
}
