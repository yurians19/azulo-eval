import { HttpStatus } from '@nestjs/common'

export const httpExceptionDuplicated = {
    statusCode: HttpStatus.CONFLICT,
    errorCode: HttpStatus.CONFLICT,
    srcMessage: 'Resource duplicate',
    translatedMessage: 'Recurso duplicado',
  }
