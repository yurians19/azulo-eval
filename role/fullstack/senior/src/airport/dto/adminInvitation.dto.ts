import { ApiProperty } from '@nestjs/swagger'

export class AdminInvitation {
  @ApiProperty({ example: 'Admin' })
  name: string

  @ApiProperty({ example: '1' })
  lastName: string

  @ApiProperty({ example: 'admin1@fleetr.com', format: 'email' })
  email: string

  @ApiProperty({ example: 'admin.fleetro' })
  role: string
}
