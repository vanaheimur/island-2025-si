import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AuthOutput {
  name!: string
  nationalId!: string

  constructor(Partial: Partial<AuthOutput>) {
    Object.assign(this, Partial)
  }
}
