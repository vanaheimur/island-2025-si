import { IsNationalId } from '../validators/isNationalId.validator'

import { InputType } from '@nestjs/graphql'
import { IsString } from 'class-validator'

@InputType()
export class AuthInput {
  @IsString()
  name!: string

  @IsNationalId()
  nationalId!: string
}
