import { InputType } from '@nestjs/graphql'

@InputType()
export class OtherDebtInput {
  interestExpenses!: number
  remainingDebt!: number
}
