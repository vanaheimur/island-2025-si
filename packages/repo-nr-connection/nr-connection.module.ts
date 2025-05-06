import config, { NrConnectionConfig } from './config'
import { NR_CLIENT } from './constants'
import { Configuration, PersonsApi } from './generated/nrClient'

import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerModule } from '@repo/logger'

@Module({
  imports: [ConfigModule.forFeature(config), LoggerModule],
  providers: [
    {
      provide: NR_CLIENT,
      useFactory: async (configService: ConfigService<NrConnectionConfig>) => {
        const config = new Configuration({
          basePath: configService.getOrThrow('nrConnection.baseUrl', {
            infer: true,
          }),
          fetchApi: fetch,
        })
        return new PersonsApi(config)
      },
      inject: [ConfigService],
    },
  ],
  exports: [NR_CLIENT],
})
export class NrConnectionModule {}
