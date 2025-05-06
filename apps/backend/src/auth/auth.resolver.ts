import { AuthService } from './auth.service'
import { AuthInput } from './dto/auth.input'
import { AuthOutput } from './dto/auth.output'

import { Args, Mutation, Resolver } from '@nestjs/graphql'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthOutput)
  async login(@Args('input') input: AuthInput): Promise<AuthOutput> {
    const accessToken = await this.authService.createAuthToken(input)
    // TODO: Set cookie here
    return new AuthOutput({ accessToken })
  }
}
