import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AssetOutput {
  id!: number
  landNumber!: string
  description!: string
  amount!: number
  isForeign!: boolean
  userId!: number

  // this allows us to cast data to an instance of this class
  constructor(partial: Partial<AssetOutput>) {
    Object.assign(this, partial)
  }
}
