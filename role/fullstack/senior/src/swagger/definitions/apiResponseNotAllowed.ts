import { HttpStatus } from '@nestjs/common'
import { ApiResponseOptions } from '@nestjs/swagger'
import { validationNotAllowedError } from 'src/airport/dto'

export const apiResponseNotAllowed: ApiResponseOptions = {
  status: HttpStatus.FORBIDDEN,
  description: 'Action not allowed',
  type: validationNotAllowedError,
}
