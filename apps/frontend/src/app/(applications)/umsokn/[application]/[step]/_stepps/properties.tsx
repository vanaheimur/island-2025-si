import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function Properties() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Text variant="h2" className="mb-4">4.1 - Fasteignir</Text>
        <Text variant="sm" className="mb-4">Innlendar fasteignir skv. fasteignamati.</Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">4.2 - Erlendar fasteignir</Text>
        <Text variant="sm" className="mb-4">Erlendar fasteignir skv. fasteignamati.</Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">4.3 - Bifreiðar</Text>
        <Text variant="sm" className="mb-4">Bifreiðar skráðar á framteljanda.</Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">4.4 - Aðrar eignir</Text>
        <Text variant="sm" className="mb-4">
          Til dæmis tjaldvagn, hjólhýsi, listaverk o.s.fv.
        </Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">4.5 - Hrein eign samkvæmt efnahagsreikningi</Text>
        <Text variant="sm" className="mb-4">Hrein eign samkvæmt samræmingarblaði RSK 4.05</Text>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/framtal/tekjur">Til baka</Link>
        </Button>
        <Button size="lg">
          <Link href="/umsokn/framtal/skuldir">Halda áfram í skuldir</Link>
        </Button>
      </div>
    </div>
  )
}
