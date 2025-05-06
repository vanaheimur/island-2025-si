import { ACCESS_TOKEN } from '../constants'

import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Request } from 'express'

export const Auth = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext<{
      req: Request
    }>().req?.cookies[ACCESS_TOKEN]
  },
)
