import { User } from './types'

import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  public createAuthToken(payload: User) {
    return this.jwtService.sign({
      sub: payload.nationalId,
      name: payload.name,
    })
  }
}
