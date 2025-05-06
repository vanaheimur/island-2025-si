import { IsNationalId } from '../validators/isNationalId.validator'

import { InputType } from '@nestjs/graphql'

@InputType()
export class AuthInput {
  @IsNationalId()
  nationalId!: string
}
