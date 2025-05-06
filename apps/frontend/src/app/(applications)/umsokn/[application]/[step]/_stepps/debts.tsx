import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function Debts() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Text variant="h2">5.1 - Vaxtagjöld</Text>
        <Text variant="sm">Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota.</Text>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/skattframtal/eignir">Til baka</Link>
        </Button>
        <Button size="lg">
          <Link href="/umsokn/skattframtal/sjuddirarirei">
            Halda áfram í sjuddirarirei
          </Link>
        </Button>
      </div>
    </div>
  )
}
