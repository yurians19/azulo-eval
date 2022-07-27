import { ApiResponseOptions } from '@nestjs/swagger'
import { AdminDto } from 'src/airport/dto'

export const getOkResponseAdmins: ApiResponseOptions = {
  description: 'Success',
  type: AdminDto,
  isArray: true,
}
