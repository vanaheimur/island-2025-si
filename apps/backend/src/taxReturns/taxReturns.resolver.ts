import { TaxReturnOutput } from './dto/taxReturn.output'
import { TaxReturnsService } from './taxReturns.service'

import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class TaxReturnsResolver {
  constructor(private readonly taxReturnsService: TaxReturnsService) {}

  @Query(() => [TaxReturnOutput])
  async getTaxReturns(): Promise<TaxReturnOutput[]> {
    const taxReturns = await this.taxReturnsService.getTaxReturns()
    return taxReturns.map((taxReturn) => new TaxReturnOutput(taxReturn))
  }
}
