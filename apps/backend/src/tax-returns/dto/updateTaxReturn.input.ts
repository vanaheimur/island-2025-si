import { AssetInput } from './asset.input'
import { IncomeInput } from './income.input'
import { MortgageInput } from './mortgage.input'
import { OtherDebtInput } from './otherDebt.input'
import { VehicleInput } from './vehicle.input'

import { InputType } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import { IsOptional } from 'class-validator'

@InputType()
export class UpdateTaxReturnInput {
  @IsOptional()
  @Type(() => IncomeInput)
  incomes?: IncomeInput[]

  @IsOptional()
  @Type(() => AssetInput)
  assets?: AssetInput[]

  @IsOptional()
  @Type(() => VehicleInput)
  vehicles?: VehicleInput[]

  @IsOptional()
  @Type(() => MortgageInput)
  mortgages?: MortgageInput[]

  @IsOptional()
  @Type(() => OtherDebtInput)
  otherDebts?: OtherDebtInput[]
}
