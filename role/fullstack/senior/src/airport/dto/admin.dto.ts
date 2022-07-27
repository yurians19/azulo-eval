import { ApiProperty } from '@nestjs/swagger'

export class AdminDto {
  @ApiProperty({ example: '5efc0d7da7076973f1515122' })
  id: string

  @ApiProperty({ example: 'Admin' })
  name: string

  @ApiProperty({ example: '1' })
  lastName: string

  @ApiProperty({ example: 'admin1@fleetr.com' })
  email: string

  @ApiProperty({ example: 'admin.fleetro' })
  role: string
}
