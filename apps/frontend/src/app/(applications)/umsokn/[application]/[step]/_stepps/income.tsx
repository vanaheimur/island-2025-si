import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function Income() {
  return (
    <div>
      <Text variant="h2">Tekjur</Text>

      <div className="flex justify-between mt-8">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/skattframtal/almennar-upplysingar">Til baka</Link>
        </Button>
        <Button size="lg">
          <Link href="/umsokn/skattframtal/eignir">Halda áfram í eignir</Link>
        </Button>
      </div>
    </div>
  )
}
