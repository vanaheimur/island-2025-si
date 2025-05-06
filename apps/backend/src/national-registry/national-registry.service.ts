import { Inject, Injectable } from '@nestjs/common'
import { NR_CLIENT, PersonsApi } from '@repo/nr-connection'

@Injectable()
export class NationalRegistryService {
  constructor(@Inject(NR_CLIENT) private readonly personsClient: PersonsApi) {}

  public async getPersonById(auth: string, nationalId: string) {
    return await this.personsClient.personsControllerGetPersonByNationalIdV1(
      {
        nationalId,
      },
      // adding this header can be standardized using middleware
      // token exchanges can be handled automatically in the same way
      { headers: { Authorization: `Bearer ${auth}` } },
    )
  }
}
