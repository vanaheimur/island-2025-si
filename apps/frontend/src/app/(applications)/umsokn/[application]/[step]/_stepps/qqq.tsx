import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function Done() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Text variant="h2" className="mb-4">Sjúddírarirei.</Text>
        <Text variant="h2" className="mb-4">Lokaskjár.</Text>
        <Text variant="h1">Sýna bráðabirgðaútreikning?</Text>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/skattframtal/skuldir">Til baka</Link>
        </Button>
      </div>
    </div>
  )
}
