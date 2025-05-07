'use client'
import { useAppForm } from '@/components/form/form'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import SvgRemove from '@/icons/Remove'
import Link from 'next/link'
import { z } from 'zod'

export default function BasicInfo() {
  const form = useAppForm({
    defaultValues: {
      ssn: '',
      ssnSpouse: '1234567830',
      test: '',
      tala: '',
      children: [{ name: '', ssn: '' }],
      samskottun: false,
      tester: '',
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <form.AppField
            name="ssn"
            validators={{
              onChange: z.string().min(10, 'Kennitala verður að vera 10 tölur'),
            }}
            children={(field) => (
              <field.PatternField
                label="Kennitala framteljanda"
                format="###### ####"
                required
              />
            )}
          />
          <form.AppField
            name="ssnSpouse"
            children={(field) => (
              <field.PatternField label="Kennitala maka" format="###### ####" />
            )}
          />
          <form.AppField
            name="test"
            children={(field) => (
              <field.SelectField
                label="Kennitala maka"
                options={[
                  { label: 'eitthvað', value: '1' },
                  { label: 'eitthvað annað', value: '2' },
                ]}
              />
            )}
          />
          <form.AppField
            name="tala"
            children={(field) => <field.NumericField label="Prufu tala" />}
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
                  return (
                    <div className="flex gap-6 items-center" key={i}>
                      <div className="grow">
                        <form.AppField name={`children[${i}].name`}>
                          {(subField) => (
                            <subField.TextField label="Name" size="md" />
                          )}
                        </form.AppField>
                      </div>
                      <div className="grow">
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
                        variant="destructive"
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
        <form.AppField name="samskottun">
          {(field) => <field.CheckboxField label="Samsköttun" />}
        </form.AppField>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          1.3 - Dvalartími - búseta á íslandi hluta úr ári
        </Text>
        <Text variant="sm" className="mb-4">
          Ef þú bjóst á íslandi aðerins hluta ársins fyllir þú inn dagsetningar
          hér.
        </Text>
        <form.AppField name="tester">
          {(field) => (
            <field.RadioGroupField
              className="grid grid-cols-2 gap-6"
              options={[
                {
                  label: 'eitthvað',
                  value: '1',
                },
                {
                  label: 'eitthvað annað',
                  value: '2',
                },
              ]}
            />
          )}
        </form.AppField>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/framtal/upplysingasofnun">Til baka</Link>
        </Button>
        <form.AppForm>
          <form.SubscribeButton label="Halda áfram í tekjur" />
        </form.AppForm>
      </div>
    </form>
  )
}
