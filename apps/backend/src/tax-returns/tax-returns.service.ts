import { Inject, Injectable } from '@nestjs/common'
import {
  RSK_CLIENT,
  type TaxReturnsApi,
  UpdateTaxReturnInput,
} from '@repo/rsk-connection'

@Injectable()
export class TaxReturnsService {
  constructor(@Inject(RSK_CLIENT) private readonly rskClient: TaxReturnsApi) {}

  getSingleTaxReturn(auth: string, nationalId: string) {
    return this.rskClient.taxReturnsControllerGetSingleTaxReturnV1(
      {
        nationalId,
      },
      { headers: { Authorization: `Bearer ${auth}` } },
    )
  }

<<<<<<< Updated upstream
  updateTaxReturn(auth: string, id: number, input: UpdateTaxReturnInput) {
    return this.rskClient.taxReturnsControllerUpdateTaxReturnV1(
      {
        id, // In a real application this would be locked to the national id
        updateTaxReturnInput: input,
      },
      { headers: { Authorization: `Bearer ${auth}` } },
    )
=======
  updateTaxReturn(auth: string, input: UpdateTaxReturnInput) {
    return this.rskClient.taxReturnsControllerUpsertTaxReturnV1(input, {
      headers: { Authorization: `Bearer ${auth}` },
    })
>>>>>>> Stashed changes
  }
}
