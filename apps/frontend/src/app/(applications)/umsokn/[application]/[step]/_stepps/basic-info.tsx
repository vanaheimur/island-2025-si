import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function BasicInfo() {
  return (
    <div>
      <Text variant="h2">Almennar upplysingar</Text>
      <div className="flex justify-between mt-8">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/skattframtal/upplysingasofnun">Til baka</Link>
        </Button>
        <Button size="lg">Áfram</Button>
      </div>
    </div>
  )
}
