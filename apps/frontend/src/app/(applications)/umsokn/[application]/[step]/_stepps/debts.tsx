import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function Debts() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Text variant="h2" className="mb-4">
          5.1 - Vaxtagjöld
        </Text>
        <Text variant="sm" className="mb-4">
          Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota.
        </Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          5.2 - Sala fasteigna
        </Text>
        <Text variant="sm" className="mb-4">
          Ef eign var seld og önnur ekki keypt í staðin skal merka hér
        </Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          5.3 - Aðrar skuldir og vaxtagjöld
        </Text>
        <Text variant="sm" className="mb-4">
          Allar aðrar skuldir og vaxtagjöld
        </Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          5.4 - Heildarskuldir
        </Text>
        <Text variant="sm" className="mb-4">
          Heildarskuldir samkvæmt samræmingarblaði RSK 4.05
        </Text>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/framtal/eignir">Til baka</Link>
        </Button>
        <Button size="lg">
          <Link href="/umsokn/framtal/sjuddirarirei">
            Áfram í sjuddirarirei
          </Link>
        </Button>
      </div>
    </div>
  )
}
