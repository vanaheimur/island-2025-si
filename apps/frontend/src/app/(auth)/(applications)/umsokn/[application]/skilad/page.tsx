import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Image from 'next/image'
import Link from 'next/link'

const Completed = () => {
  return (
    <div className="flex gap-12 md:gap-25 items-center max-md:flex-col my-auto">
      <div className="order-2 md:order-1">
        <Text variant="h1" className="mb-4.5">
          Skattframtali hefur verið skilað
        </Text>
        <Text>
          Þú hefur nú skilað skattframtali. Þú getur nú nálgast
          bráðabirgðaútreikning á síðum Skattsins, en athugið að tölur gætu
          breyst.
        </Text>
        <div className="flex gap-4 mt-12 max-md:flex-col">
          <Button size="lg" asChild>
            <Link href="/minar-sidur/skattframtal">Bráðabirgðaútreikning</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/minar-sidur/skattframtal">Skattframtal</Link>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <Image src="/assets/mynd.svg" alt="mynd" width={432} height={445} />
      </div>
    </div>
  )
}

export default Completed
