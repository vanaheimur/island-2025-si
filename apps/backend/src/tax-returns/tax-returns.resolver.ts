import { AssetOutput } from './dto/asset.output'
import { IncomeOutput } from './dto/income.output'
import { MortgageOutput } from './dto/mortgage.output'
import { OtherDebtOutput } from './dto/otherDebt.output'
import { TaxReturnOutput } from './dto/taxReturn.output'
import { UpdateTaxReturnInput } from './dto/updateTaxReturn.input'
import { TaxReturnsService } from './tax-returns.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { CurrentUser } from '../auth/decorators/currentUser.decorator'
import { type User } from '../auth/types'

<<<<<<< Updated upstream
import { Query, Resolver } from '@nestjs/graphql'
=======
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
>>>>>>> Stashed changes

@Resolver()
export class TaxReturnsResolver {
  constructor(private readonly taxReturnsService: TaxReturnsService) {}

  @Query(() => TaxReturnOutput)
  async getTaxReturn(
    @CurrentUser() user: User,
    @Auth() auth: string,
  ): Promise<TaxReturnOutput> {
    const taxReturn = await this.taxReturnsService.getSingleTaxReturn(
      auth,
      user.nationalId,
    )

    return new TaxReturnOutput({
      ...taxReturn,
      incomes: taxReturn.incomes.map((income) => new IncomeOutput(income)),
      assets: taxReturn.assets.map((asset) => new AssetOutput(asset)),
      mortgages: taxReturn.mortgages.map(
        (mortgage) => new MortgageOutput(mortgage),
      ),
      otherDebts: taxReturn.otherDebts.map(
        (otherDebt) => new OtherDebtOutput(otherDebt),
      ),
    })
  }
<<<<<<< Updated upstream
=======

  @Mutation(() => TaxReturnOutput)
  async upsertTaxReturn(
    @Args('input') input: UpdateTaxReturnInput,
    @Auth() auth: string,
  ): Promise<TaxReturnOutput> {
    const taxReturn = await this.taxReturnsService.updateTaxReturn(auth, input)

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
>>>>>>> Stashed changes
}
