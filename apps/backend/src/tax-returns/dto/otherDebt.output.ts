import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class OtherDebtOutput {
  id!: number
  description!: string
  interestExpenses!: number
  remainingDebt!: number
  userId!: number

  // this allows us to cast data to an instance of this class
  constructor(partial: Partial<OtherDebtOutput>) {
    Object.assign(this, partial)
  }
}
