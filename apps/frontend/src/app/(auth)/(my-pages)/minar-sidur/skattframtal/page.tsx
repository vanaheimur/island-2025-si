import { Card } from '@/components/card/card'
import { Text } from '@/components/ui/text'

export default function MyPages() {
  return (
    <div className="">
      <Text variant="h3" as="h1" className="mb-4">
        Mín framtöl
      </Text>
      <Text variant="md">
        Hér getur þú séð upplýsingar um framtöl sem þú hefur aðgang að.
      </Text>
      <div className="mt-12">
        <Text variant="xs" className="font-semibold mb-8">
          Virk framtöl
        </Text>
        <Card date="08.05.2025" buttonLink="/umsokn/framtal/upplysingasofnun" />
      </div>
      <div className="mt-12">
        <Text variant="xs" className="font-semibold mb-8">
          Eldri framtöl
        </Text>
        <div className="flex flex-col gap-4">
          <Card
            date="08.05.2024"
            statusLabel="Framtali skilað"
            progressWidth="100%"
            progressText="Þú hefur klárað 6 af 6 skrefum"
            buttonLabel="Skoða framtal"
            heading="Skattframtal skil 2024"
          />
          <Card
            date="08.05.2023"
            statusLabel="Framtali skilað"
            progressWidth="100%"
            progressText="Þú hefur klárað 6 af 6 skrefum"
            buttonLabel="Skoða framtal"
            heading="Skattframtal skil 2023"
          />
          <Card
            date="08.05.2022"
            statusLabel="Framtali skilað"
            progressWidth="100%"
            progressText="Þú hefur klárað 6 af 6 skrefum"
            buttonLabel="Skoða framtal"
            heading="Skattframtal skil 2022"
          />
        </div>
      </div>
    </div>
  )
}
