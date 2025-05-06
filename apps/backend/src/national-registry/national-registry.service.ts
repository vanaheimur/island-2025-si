import { Inject, Injectable } from '@nestjs/common'
import { NR_CLIENT, PersonsApi } from '@repo/nr-connection'

@Injectable()
export class NationalRegistryService {
  constructor(@Inject(NR_CLIENT) private readonly personsClient: PersonsApi) {}

  public async getPersonById(nationalId: string) {
    const person =
      await this.personsClient.personsControllerGetPersonByNationalIdV1({
        nationalId,
      })
    return person
  }
}
