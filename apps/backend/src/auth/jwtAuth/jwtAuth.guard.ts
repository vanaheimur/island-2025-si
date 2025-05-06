import { IS_PUBLIC_KEY } from '../constants'

import { ExecutionContext, Inject, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { type Logger, LOGGER_PROVIDER } from '@repo/logger'
import { Request } from 'express'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt-auth') {
  constructor(
    private reflector: Reflector,
    @Inject(LOGGER_PROVIDER)
    private readonly logger: Logger,
  ) {
    super()
  }

  getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }

  canActivate(context: ExecutionContext) {
    /**
     * We bypass the authToken validation if the endpoint or class
     * is decorated with the "IsPublic" decorator
     */
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (isPublic) {
      this.logger.info(
        `Bypassing auth in "${context.getClass().name}" for the endpoint "${
          context.getHandler().name
        }"`,
      )
      return true
    }

    return super.canActivate(context)
  }
}
