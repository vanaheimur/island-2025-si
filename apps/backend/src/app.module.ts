import { TaxReturnsModule } from './taxReturns/taxReturns.module'

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { LoggerModule } from '@repo/logger'

@Module({
  imports: [
    LoggerModule,
    TaxReturnsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: './schema.gql',
    }),
  ],
})
export class AppModule {}
