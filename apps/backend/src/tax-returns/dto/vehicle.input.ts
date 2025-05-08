import { InputType } from '@nestjs/graphql'

@InputType()
export class VehicleInput {
  licensePlate!: string
  yearOfPurchase!: number
  value!: number
}
