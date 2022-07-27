import { ApiBodyOptions } from '@nestjs/swagger'
import { AdminDto } from 'src/airport/dto'

export const postCreatedResponse: ApiBodyOptions = {
  description: 'Success',
  type: AdminDto
}
