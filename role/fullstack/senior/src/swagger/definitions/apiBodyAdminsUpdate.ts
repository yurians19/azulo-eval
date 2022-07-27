import { ApiBodyOptions } from '@nestjs/swagger'
import { AdminUpdate } from 'src/airport/dto'

export const apiBodyAdminsUpdate: ApiBodyOptions = {
  description: 'The requested Body',
  type: AdminUpdate,
}
