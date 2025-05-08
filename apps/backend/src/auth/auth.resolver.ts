import { AuthService } from './auth.service'
import { ACCESS_TOKEN } from './constants'
import { CurrentUser } from './decorators/currentUser.decorator'
import { GraphqlResponse } from './decorators/GraphqlResponse.decorator'
import { IsPublic } from './decorators/isPublic.decorator'
import { AuthInput } from './dto/auth.input'
import { AuthOutput } from './dto/auth.output'
import type { User } from './types'

import { Inject, UnauthorizedException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { type Logger, LOGGER_PROVIDER } from '@repo/logger'
import type { Response } from 'express'

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    @Inject(LOGGER_PROVIDER) private readonly logger: Logger,
  ) {}

  @IsPublic()
  @Mutation(() => Boolean)
  async login(
    @Args('input') input: AuthInput,
    @GraphqlResponse() response: Response,
  ): Promise<boolean> {
    try {
      const accessToken = await this.authService.createAuthToken(
        input.nationalId,
      )

      // We set a secure cookie that the frontend js can't access
      response.cookie(ACCESS_TOKEN, accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      })

      return true
    } catch (error) {
      this.logger.error('Error while logging in', error)
      throw new UnauthorizedException(
        'We could not find you, please question your existence to the appropriate authorities',
      )
    }
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

  @Query(() => AuthOutput)
  async getUser(@CurrentUser() user: User): Promise<AuthOutput> {
    return new AuthOutput(user)
  }
}
