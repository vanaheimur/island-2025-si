import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AuthOutput {
  accessToken!: string

  constructor(input: AuthOutput) {
    Object.assign(this, input)
  }
}
