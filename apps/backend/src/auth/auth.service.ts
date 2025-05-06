import { NationalRegistryService } from '../national-registry/national-registry.service'

import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { type Logger, LOGGER_PROVIDER } from '@repo/logger'

@Injectable()
export class AuthService {
  constructor(
    @Inject(LOGGER_PROVIDER) private readonly logger: Logger,
    private readonly jwtService: JwtService,
    private readonly nationalRegistryService: NationalRegistryService,
  ) {}

  public async createAuthToken(nationalId: string) {
    // In a real application this world be created using other means
    const systemToken = this.jwtService.sign({
      sub: nationalId,
    })

    const person = await this.nationalRegistryService.getPersonById(
      systemToken,
      nationalId,
    )

    // In a real application we would separate logs into audit and system logs
    this.logger.info('Authenticating user', {
      nationalId,
    })

    return this.jwtService.sign({
      sub: nationalId,
      name: person.name,
    })
  }
}
