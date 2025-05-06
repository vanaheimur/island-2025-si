import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function Income() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Text variant="h2">2.1 - Tekjur frá launagreiðenda</Text>
        <Text variant="sm">Laun og launatengdar greiðslur.</Text>
      </div>

      <div>
        <Text variant="h2">2.2 - Samsköttun</Text>
        <Text variant="sm">
          Einstaklingar í óvígðri sambúð sem uppfylla skilyrði, geta óskað eftir
          samsköttun með að merkja í reitinn.
        </Text>
      </div>

      <div>
        <Text variant="h2">
          2.3 - Lífeyrisgreiðslur, styrkir, greiðslur frá Tryggingastofnun o.fl.
        </Text>
        <Text variant="sm">
          Hér koma t.d. greiðslur úr almennum lífeyrissjóðum, atvinnuleysisbætur
          og félagsleg aðstoð.
        </Text>
      </div>

      <div>
        <Text variant="h2">
          2.4 - Dagpeningar, ökutækjastyrkur og önnur hlunnindi
        </Text>
        <Text variant="sm">
          Hér koma dagpeningagreiðslur, ökutækjastyrkir og önnur hlunnindi.
        </Text>
      </div>

      <div>
        <Text variant="h2">2.5 - Greinargerð um kaup og sölu á eignum</Text>
        <Text variant="sm">
          Tilgreinið kaup og sölu hvers konar lausafjár, ökutækja, hjólhýsa
          o.s.fv.
        </Text>
      </div>

      <div>
        <Text variant="h2">2.6 - Erlendar tekjur</Text>
        <Text variant="sm">Erlendar tekjur, laun o.s.fv.</Text>
      </div>

      <div>
        <Text variant="h2">2.7 - Skattfrjálsar tekjur</Text>
        <Text variant="sm">Erlendar tekjur, laun o.s.fv.</Text>
      </div>

      <div>
        <Text variant="h2">2.10 - Hvað greiddir þú háa staðgreiðslu</Text>
        <Text variant="sm">
          Staðgreiðsla af öðrum tekjum en fjármagnstekjum
        </Text>
      </div>

      <div className="flex justify-between">
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
