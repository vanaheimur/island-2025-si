import { TaxReturnOutputStatusEnum } from '@repo/rsk-connection'

export class CreateTaxReturnInput {
  status!: TaxReturnOutputStatusEnum
  userId!: number
}
