import { CheckboxField } from '@/components/checkbox-field/checkbox-field'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'
export default function DataGathering() {
  return (
    <div className="flex flex-col">
      <Text variant="h2" className="mb-4">
        Upplýsingaöflun
      </Text>
      <Text className="font-semibold mb-8">
        Eftirfarandi gögn verða sótt rafrænt.
      </Text>
      <Text className="text-primary font-semibold mb-2">
        Upplýsingar úr Þjóðskrá
      </Text>
      <Text className="mb-8">Sóttar eru persónuupplýsingar úr Þjóðskrá.</Text>
      <Text className="text-primary font-semibold mb-2">
        Netfang og símanúmer úr þínum stillingum
      </Text>
      <Text className="mb-8">Netfang og símanúmer er sótt af mínum síðum.</Text>
      <Text className="text-primary font-semibold mb-2">
        Upplýsingar frá Skattinum
      </Text>
      <Text className="mb-8">
        Sóttar eru nauðsynlegar upplýsingar fyrir útfyllingu skattframtals frá
        Skattinum.
      </Text>
      <CheckboxField name="consent">
        Ég skil að ofangreind gögn verða sótt
      </CheckboxField>

      <Button className="ml-auto mt-8" size="lg" asChild>
        <Link href="/umsokn/framtal/almennar-upplysingar">Áfram í framtal</Link>
      </Button>
    </div>
  )
}
