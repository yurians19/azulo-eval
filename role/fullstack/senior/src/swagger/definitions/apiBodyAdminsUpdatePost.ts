import { ApiBodyOptions } from '@nestjs/swagger'
import { AdminInvitation } from 'src/airport/dto'

export const apiBodyAdminsUpdatePost: ApiBodyOptions = {
  description: 'The requested Body',
  type: AdminInvitation,
}
