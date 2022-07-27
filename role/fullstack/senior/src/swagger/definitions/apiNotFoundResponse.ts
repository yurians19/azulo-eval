import { ApiResponseOptions } from '@nestjs/swagger'
import { NotFoundError } from 'src/airport/dto'

export const apiNotFoundResponse: ApiResponseOptions = {
  description: 'The requested resource or path can not be found',
  type: NotFoundError,
}
