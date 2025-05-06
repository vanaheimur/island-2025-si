import { TaxReturnsResolver } from './taxReturns.resolver'
import { TaxReturnsService } from './taxReturns.service'

import { Module } from '@nestjs/common'
import { RskConnectionModule } from '@repo/rsk-connection'

@Module({
  imports: [RskConnectionModule],
  providers: [TaxReturnsService, TaxReturnsResolver],
})
export class TaxReturnsModule {}
