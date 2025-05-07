import { AssetOutput } from './dto/asset.output'
import { IncomeOutput } from './dto/income.output'
import { MortgageOutput } from './dto/mortgage.output'
import { OtherDebtOutput } from './dto/otherDebt.output'
import { TaxReturnOutput } from './dto/taxReturn.output'
import { TaxReturnsService } from './tax-returns.service'
import { Auth } from '../auth/decorators/auth.decorator'

import { Mutation, Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class TaxReturnsResolver {
  constructor(private readonly taxReturnsService: TaxReturnsService) {}

  @Query(() => TaxReturnOutput)
  async getTaxReturn(@Auth() auth: string): Promise<TaxReturnOutput> {
    const taxReturn = await this.taxReturnsService.getSingleTaxReturn(auth)

    return new TaxReturnOutput({
      ...taxReturn.data,
      incomes: taxReturn.data.incomes.map((income) => new IncomeOutput(income)),
      assets: taxReturn.data.assets.map((asset) => new AssetOutput(asset)),
      mortgages: taxReturn.data.mortgages.map(
        (mortgage) =>
          new MortgageOutput({
            ...mortgage,
            loanDate: new Date(mortgage.loanDate),
          }),
      ),
      otherDebts: taxReturn.data.otherDebts.map(
        (otherDebt) => new OtherDebtOutput(otherDebt),
      ),
    })
  }

  @Mutation(() => Boolean)
  async upsertTaxReturn(@Auth() auth: string): Promise<boolean> {
    const taxReturn = await this.taxReturnsService.updateTaxReturn(auth, {
      incomes: [
        { amount: 1000, category: 'salary', description: 'some value yeah' },
      ],
      value: 1000,
    })

    return true
  }
}
