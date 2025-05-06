import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function Properties() {
  return (
    <div>
      <Text variant="h2">Eignir</Text>

      <div className="flex justify-between mt-8">
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
