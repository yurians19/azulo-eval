import { ApiOperationOptions } from '@nestjs/swagger'

export const getOperationAdmins: Partial<ApiOperationOptions> = { 
  summary: 'Get the admins list', 
  description: 'Get the admins list' 
}
