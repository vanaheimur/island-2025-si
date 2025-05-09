import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MortgageOutput {
  id!: number
  yearOfPurchase!: number
  residentialLocation!: string
  lenderName!: string
  lenderNationalId!: string
  loanNumber!: string
  loanDate!: string
  loanTermInYears!: number
  totalPaymentsForTheYear!: number
  installmentOfNominalValue!: number
  interestExpenses!: number
  remainingDebt!: number
  userId!: number

  // this allows us to cast data to an instance of this class
  constructor(partial: Partial<MortgageOutput>) {
    Object.assign(this, partial)
  }
}
