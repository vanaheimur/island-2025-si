import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function Debts() {
  return (
    <div>
      <Text variant="h2">Skuldir</Text>

      <div className="flex justify-between mt-8">
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
