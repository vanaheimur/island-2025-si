import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class IncomeOutput {
  id!: number
  description!: string
  amount!: number
  userId!: number
  incomeCategoryId!: number

  // this allows us to cast data to an instance of this class
  constructor(partial: Partial<IncomeOutput>) {
    Object.assign(this, partial)
  }
}
