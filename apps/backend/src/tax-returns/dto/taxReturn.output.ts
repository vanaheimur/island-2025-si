import { AssetOutput } from './asset.output'
import { IncomeOutput } from './income.output'
import { MortgageOutput } from './mortgage.output'
import { OtherDebtOutput } from './otherDebt.output'
import { VehicleOutput } from './vehicle.output'

import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { TaxReturnOutputStatusEnum } from '@repo/rsk-connection'

// We register the enum we fetched through the OpenAPI generator, this ensures we return the correct enum values
registerEnumType(TaxReturnOutputStatusEnum, { name: 'StatusEnum' })

@ObjectType()
export class TaxReturnOutput {
  year!: number
  @Field(() => TaxReturnOutputStatusEnum)
  status!: TaxReturnOutputStatusEnum
  userId!: number

  incomes!: IncomeOutput[]
  assets!: AssetOutput[]
  vehicles!: VehicleOutput[]
  mortgages!: MortgageOutput[]
  otherDebts!: OtherDebtOutput[]

  // this allows us to cast data to an instance of this class
  constructor(partial: Partial<TaxReturnOutput>) {
    Object.assign(this, partial)
  }
}
