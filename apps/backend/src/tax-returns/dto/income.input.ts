import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { IncomeInputCategoryEnum } from '@repo/rsk-connection'

registerEnumType(IncomeInputCategoryEnum, {
  name: 'IncomeCategory',
})

@InputType()
export class IncomeInput {
  description!: string
  amount!: number
  @Field(() => IncomeInputCategoryEnum)
  category!: IncomeInputCategoryEnum
}
