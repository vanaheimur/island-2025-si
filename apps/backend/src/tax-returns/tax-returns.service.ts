import { Inject, Injectable } from '@nestjs/common'
import { RSK_CLIENT, type TaxReturnsApi } from '@repo/rsk-connection'

@Injectable()
export class TaxReturnsService {
  constructor(@Inject(RSK_CLIENT) private readonly rskClient: TaxReturnsApi) {}

  getTaxReturns() {
    return this.rskClient.taxReturnsControllerGetMultipleTaxReturnsV1()
  }
}
