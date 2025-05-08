'use client'

import { useAppForm } from '@/components/form/form'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import SvgRemove from '@/icons/Remove'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function BasicInfo() {
  const router = useRouter()
  const form = useAppForm({
    defaultValues: {
      ssn: '1234567830',
      ssnSpouse: '',
      children: [{ name: 'Heimir Jónsson', ssn: '1234567830' }],
      samskottun: false,
    },
    onSubmit: (values) => {
      router.push('/umsokn/framtal/tekjur')
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
          Jón Jónsson
        </Text>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <form.AppField
            name="ssn"
            children={(field) => (
              <field.PatternField
                label="Kennitala framteljanda"
                format="###### ####"
                disabled
              />
            )}
          />
          <form.AppField
            name="ssnSpouse"
            children={(field) => (
              <field.PatternField label="Kennitala maka" format="###### ####" />
            )}
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

        <form.Field name="children" mode="array">
          {(field) => {
            return (
              <div className="flex flex-col gap-6">
                {field.state.value.map((_, i) => {
                  return i === 0 ? (
                    <div className="flex gap-4 items-center" key={i}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 grow">
                        <form.AppField name={`children[${i}].name`}>
                          {(subField) => (
                            <subField.TextField
                              label="Name"
                              size="md"
                              disabled
                            />
                          )}
                        </form.AppField>
                        <form.AppField name={`children[${i}].ssn`}>
                          {(subField) => (
                            <subField.PatternField
                              label="Kennitala"
                              format="###### ####"
                              size="md"
                              disabled
                            />
                          )}
                        </form.AppField>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-4 items-end" key={i}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 grow">
                        <form.AppField name={`children[${i}].name`}>
                          {(subField) => (
                            <subField.TextField label="Name" size="md" />
                          )}
                        </form.AppField>
                        <form.AppField name={`children[${i}].ssn`}>
                          {(subField) => (
                            <subField.PatternField
                              label="Kennitala"
                              format="###### ####"
                              size="md"
                            />
                          )}
                        </form.AppField>
                      </div>

                      <Button
                        onClick={() => field.removeValue(i)}
                        type="button"
                        size="lg"
                        variant="outline"
                      >
                        <SvgRemove className="size-7" />
                      </Button>
                    </div>
                  )
                })}
                <div>
                  <Button
                    onClick={() => field.pushValue({ name: '', ssn: '' })}
                    type="button"
                    size="default"
                  >
                    Bæta við
                  </Button>
                </div>
              </div>
            )
          }}
        </form.Field>
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
          <Link href="/umsokn/framtal/upplysingasofnun">Til baka</Link>
        </Button>
        <form.AppForm>
          <form.SubscribeButton label="Áfram í tekjur" />
        </form.AppForm>
      </div>
    </form>
  )
}
