import { InputType } from '@nestjs/graphql'

@InputType()
export class AssetInput {
  landNumber!: string
  description!: string
  amount!: number
  isForeign!: boolean
}
