import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function Properties() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Text variant="h2">4.1 - Fasteignir</Text>
        <Text variant="sm">Innlendar fasteignir skv. fasteignamati.</Text>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/skattframtal/tekjur">Til baka</Link>
        </Button>
        <Button size="lg">
          <Link href="/umsokn/skattframtal/skuldir">Halda áfram í skuldir</Link>
        </Button>
      </div>
    </div>
  )
}
