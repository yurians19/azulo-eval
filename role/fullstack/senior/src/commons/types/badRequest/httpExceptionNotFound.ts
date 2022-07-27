import { HttpStatus } from '@nestjs/common'

export const httpExceptionNotFound = {
  statusCode: HttpStatus.NOT_FOUND,
  errorCode: HttpStatus.NOT_FOUND,
  srcMessage: 'Resource not found',
  translatedMessage: 'Recurso no encontrado',
}
