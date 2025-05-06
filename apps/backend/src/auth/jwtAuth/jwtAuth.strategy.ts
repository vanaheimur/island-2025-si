import { AuthConfig } from '../config'
import { ACCESS_TOKEN } from '../constants'
import type { JwtPayload, User } from '../types'

import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy, 'jwt-auth') {
  constructor(readonly configService: ConfigService<AuthConfig>) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
          const token = req?.cookies[ACCESS_TOKEN]
          return token || null
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow('auth.secret', { infer: true }),
      passReqToCallback: true,
    })
  }

  validate(req: Request, payload: JwtPayload): User {
    return {
      nationalId: payload.sub,
      name: payload.name,
    }
  }
}
