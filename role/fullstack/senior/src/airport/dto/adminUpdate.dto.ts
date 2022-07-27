import { ApiProperty } from '@nestjs/swagger'
import { IsEmail } from 'class-validator';

export class AdminUpdate {
  @ApiProperty({ example: 'Admin', nullable: true })
  name: string

  @ApiProperty({ example: '1', nullable: true  })
  lastName: string

  @ApiProperty({ example: 'admin1@fleetr.com', format: 'email', nullable: true  })
  @IsEmail()
  email: string

  @ApiProperty({ example: 'admin.fleetro', nullable: true  })
  role: string
}
