import { InputType } from '@nestjs/graphql'

@InputType()
export class OtherDebtInput {
  description!: string
  interestExpenses!: number
  remainingDebt!: number
}
