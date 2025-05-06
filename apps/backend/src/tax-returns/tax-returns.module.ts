import { TaxReturnsResolver } from './tax-returns.resolver'
import { TaxReturnsService } from './tax-returns.service'

import { Module } from '@nestjs/common'
import { RskConnectionModule } from '@repo/rsk-connection'

@Module({
  imports: [RskConnectionModule],
  providers: [TaxReturnsService, TaxReturnsResolver],
})
export class TaxReturnsModule {}
