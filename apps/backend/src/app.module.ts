import { TaxReturnsModule } from './taxReturns/taxReturns.module'

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    // LoggerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // playground: true,
      // autoSchemaFile: './schema.gql',
    }),
    TaxReturnsModule,
  ],
})
export class AppModule {}
