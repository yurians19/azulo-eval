import { HttpStatus } from '@nestjs/common'
import { ApiResponseOptions } from '@nestjs/swagger'
import { ValidationError } from 'src/airport/dto'

export const getResponseInvalid: ApiResponseOptions = {
  status: HttpStatus.UNPROCESSABLE_ENTITY,
  description: 'Given attributes are invalid for requested action',
  type: ValidationError,
}
