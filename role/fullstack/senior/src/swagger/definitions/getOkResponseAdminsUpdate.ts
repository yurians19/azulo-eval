import { ApiResponseOptions } from '@nestjs/swagger'
import { AdminDto } from 'src/airport/dto'

export const getOkResponseAdminsUpdate: ApiResponseOptions = {
  description: 'Success',
  type: AdminDto,
}
