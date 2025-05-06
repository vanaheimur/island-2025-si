import config, { RskConnectionConfig } from './config'
import { RSK_CLIENT } from './constants'
import { Configuration, TaxReturnsApi } from './generated/rskClient'

import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerModule } from '@repo/logger'

@Module({
  imports: [ConfigModule.forFeature(config), LoggerModule],
  providers: [
    {
      provide: RSK_CLIENT,
      useFactory: async (configService: ConfigService<RskConnectionConfig>) => {
        const config = new Configuration({
          basePath: configService.getOrThrow('rskConnection.baseUrl', {
            infer: true,
          }),
          fetchApi: fetch,
        })
        return new TaxReturnsApi(config)
      },
      inject: [ConfigService],
    },
  ],
  exports: [RSK_CLIENT],
})
export class RskConnectionModule {}
