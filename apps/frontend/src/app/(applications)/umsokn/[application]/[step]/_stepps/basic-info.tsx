import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function BasicInfo() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Text variant="h2">Jökull Þórðarson</Text>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/skattframtal/upplysingasofnun">Til baka</Link>
        </Button>
        <Button size="lg">
          <Link href="/umsokn/skattframtal/tekjur">Halda áfram í tekjur</Link>
        </Button>
      </div>
    </div>
  )
}
