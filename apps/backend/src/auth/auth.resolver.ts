import { AuthService } from './auth.service'
import { ACCESS_TOKEN } from './constants'
import { GraphqlResponse } from './decorators/GraphqlResponse.decorator'
import { IsPublic } from './decorators/isPublic.decorator'
import { AuthInput } from './dto/auth.input'

import { Args, Mutation, Resolver } from '@nestjs/graphql'
import type { Response } from 'express'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Mutation(() => Boolean)
  login(
    @Args('input') input: AuthInput,
    @GraphqlResponse() response: Response,
  ): boolean {
    const accessToken = this.authService.createAuthToken(input)

    // We set a secure cookie that the frontend js can't access
    response.cookie(ACCESS_TOKEN, accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    })

    return true
  }

  @Mutation(() => Boolean)
  logout(@GraphqlResponse() response: Response): boolean {
    // We unset the cookie, the token will then be invalidated when the time runs out
    response.cookie(ACCESS_TOKEN, '', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    })

    return true
  }
}
