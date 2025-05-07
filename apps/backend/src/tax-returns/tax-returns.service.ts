import { Inject, Injectable } from '@nestjs/common'
import { RSK_CLIENT, type TaxReturnsApi } from '@repo/rsk-connection'
import { UpdateTaxReturnInput } from '@repo/rsk-connection'

@Injectable()
export class TaxReturnsService {
  constructor(@Inject(RSK_CLIENT) private readonly rskClient: TaxReturnsApi) {}

  getSingleTaxReturn(auth: string) {
    return this.rskClient.taxReturnsControllerGetSingleTaxReturnV1({
      headers: { Authorization: `Bearer ${auth}` },
    })
  }

  updateTaxReturn(auth: string, input: UpdateTaxReturnInput) {
    console.log('input', input)
    return this.rskClient.taxReturnsControllerUpsertTaxReturnV1(input, {
      headers: { Authorization: `Bearer ${auth}` },
    })
  }
}
