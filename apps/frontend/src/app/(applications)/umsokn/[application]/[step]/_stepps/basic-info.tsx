'use client'
import { useAppForm } from '@/components/form/form'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export default function BasicInfo() {
  const form = useAppForm({
    defaultValues: {
      ssn: '1234567890',
      ssnSpouse: '1234567830',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="flex flex-col gap-20"
    >
      <div>
        <Text variant="h2" className="mb-4">
          Jökull Þórðarson
        </Text>
        <div className="grid grid-cols-2 gap-6">
          <form.AppField
            name="ssn"
            children={(field) => (
              <field.TextField label="Kennitala framteljanda" />
            )}
          />
          <form.AppField
            name="ssnSpouse"
            children={(field) => <field.TextField label="Kennitala maka" />}
          />
        </div>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          1.1 - Börn
        </Text>
        <Text variant="sm" className="mb-4">
          Börn fædd 2012 og síðar með lögheimili hjá framteljanda í lok árs 2025
        </Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          1.2 - Samsköttun
        </Text>
        <Text variant="sm" className="mb-4">
          Einstaklingar í óvígðri sambúð sem uppfylla skilyrði, geta óskað eftir
          samsköttun með að merkja í reitinn.
        </Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          1.3 - Dvalartími - búseta á íslandi hluta úr ári
        </Text>
        <Text variant="sm" className="mb-4">
          Ef þú bjóst á íslandi aðerins hluta ársins fyllir þú inn dagsetningar
          hér.
        </Text>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/skattframtal/upplysingasofnun">Til baka</Link>
        </Button>
        <form.AppForm>
          <form.SubscribeButton label="Submit" />
        </form.AppForm>
        <Button size="lg">
          <Link href="/umsokn/skattframtal/tekjur">Halda áfram í tekjur</Link>
        </Button>
      </div>
    </form>
  )
}
