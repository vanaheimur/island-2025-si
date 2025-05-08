import { AssetOutput } from './dto/asset.output'
import { IncomeOutput } from './dto/income.output'
import { MortgageOutput } from './dto/mortgage.output'
import { OtherDebtOutput } from './dto/otherDebt.output'
import { TaxReturnOutput } from './dto/taxReturn.output'
import { UpdateTaxReturnInput } from './dto/updateTaxReturn.input'
import { VehicleOutput } from './dto/vehicle.output'
import { TaxReturnsService } from './tax-returns.service'
import { Auth } from '../auth/decorators/auth.decorator'

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

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
      vehicles: taxReturn.data.vehicles.map(
        (vehicle) => new VehicleOutput(vehicle),
      ),
      mortgages: taxReturn.data.mortgages.map(
        (mortgage) => new MortgageOutput(mortgage),
      ),
      otherDebts: taxReturn.data.otherDebts.map(
        (otherDebt) => new OtherDebtOutput(otherDebt),
      ),
    })
  }

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
      vehicles: taxReturn.data.vehicles.map(
        (vehicle) => new VehicleOutput(vehicle),
      ),
      mortgages: taxReturn.data.mortgages.map(
        (mortgage) => new MortgageOutput(mortgage),
      ),
      otherDebts: taxReturn.data.otherDebts.map(
        (otherDebt) => new OtherDebtOutput(otherDebt),
      ),
    })
  }
}
