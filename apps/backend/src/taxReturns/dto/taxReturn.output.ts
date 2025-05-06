import { ObjectType, registerEnumType } from '@nestjs/graphql'
import { TaxReturnOutputStatusEnum } from '@repo/rsk-connection'

// We register the enum we fetched through the OpenAPI generator, this ensures we return the correct enum values
registerEnumType(TaxReturnOutputStatusEnum, { name: 'StatusEnum' })

@ObjectType()
export class TaxReturnOutput {
  id!: number
  year!: number
  status!: TaxReturnOutputStatusEnum
  createdAt!: Date
  updatedAt!: Date

  // this allows us to cast data to an instance of this class
  constructor(partial: Partial<TaxReturnOutput>) {
    Object.assign(this, partial)
  }
}
