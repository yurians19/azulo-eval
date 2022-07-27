import { HttpStatus } from '@nestjs/common'
import { ApiResponseOptions } from '@nestjs/swagger'
import { ValidationDuplicateError } from 'src/airport/dto'

export const apiResponseInvalid: ApiResponseOptions = {
  status: HttpStatus.CONFLICT,
  description: 'Email is duplicate for requested action',
  type: ValidationDuplicateError,
}
