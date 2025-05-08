import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class VehicleOutput {
  id!: number
  licensePlate!: string
  yearOfPurchase!: number
  value!: number
  userId!: number

  // this allows us to cast data to an instance of this class
  constructor(partial: Partial<VehicleOutput>) {
    Object.assign(this, partial)
  }
}
