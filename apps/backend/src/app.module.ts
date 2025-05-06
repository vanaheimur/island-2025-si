import config from './config'
import { NationalRegistryModule } from './national-registry/national-registry.module'
import { TaxReturnsModule } from './tax-returns/tax-returns.module'

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { LoggerModule } from '@repo/logger'

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      load: [config],
      cache: true,
    }),
    TaxReturnsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: config().app.showPlayground,
      autoSchemaFile: './schema.gql',
    }),
    NationalRegistryModule,
  ],
})
export class AppModule {}
