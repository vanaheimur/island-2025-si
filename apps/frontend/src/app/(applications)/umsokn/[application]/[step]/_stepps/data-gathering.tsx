import { CheckboxField } from '@/components/checkbox-field/checkbox-field'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'
export default function DataGathering() {
  return (
    <div className="flex flex-col">
      <Text variant="h2" className="mb-4">
        Upplýsingasöfnun
      </Text>
      <Text className="font-semibold mb-8">
        Eftirfarandi gögn verða sótt rafrænt.
      </Text>
      <Text className="text-primary font-semibold mb-2">
        Persónuupplýsingar úr Þjóðskrá
      </Text>
      <Text className="mb-8">
        Til þess að auðvelda fyrir sækjum við persónuupplýsingar úr Þjóðskrá til
        þess að fylla út umsóknina
      </Text>
      <Text className="text-primary font-semibold mb-2">
        Netfang og símanúmer úr þínum stillingum
      </Text>
      <Text className="mb-8">
        Til þess að auðvelda umsóknarferlið er gott að hafa fyllt út netfang og
        símanúmer á mínum síðum
      </Text>
      <Text className="text-primary font-semibold mb-2">
        Upplýsingar úr ökuskírteinaskrá
      </Text>
      <Text className="mb-8">
        Sóttar eru almennar upplýsingar um núverandi réttindi, sviptingar,
        punktastöðu, akstursmat og tákntölur sem varða heilsufar/sjón á fyrra
        ökuskírteini ef við á.
      </Text>
      <CheckboxField name="consent">
        Persónuupplýsingar úr Þjóðskrá
      </CheckboxField>

      <Button className="ml-auto mt-8" size="lg" asChild>
        <Link href="/umsokn/skattframtal/almennar-upplysingar">
          Áfram í framtal
        </Link>
      </Button>
    </div>
  )
}
