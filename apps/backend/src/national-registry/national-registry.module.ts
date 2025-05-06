import { NationalRegistryService } from './national-registry.service'

import { Module } from '@nestjs/common'
import { NrConnectionModule } from '@repo/nr-connection'

@Module({
  imports: [NrConnectionModule],
  providers: [NationalRegistryService],
  exports: [NationalRegistryService],
})
export class NationalRegistryModule {}
