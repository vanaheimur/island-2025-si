'use client'

import { ErrorNotification } from './fetch-error'
import { Skeleton } from './skeleton'

import { useAppForm } from '@/components/form/form'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { graphqlClient } from '@/graphql/client'
import { UpdateTaxReturnInput } from '@/graphql/generated'
import SvgAdd from '@/icons/Add'
import SvgRemove from '@/icons/Remove'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Properties() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['taxReturn'],
    queryFn: () => graphqlClient.getTaxReturn(),
    select: (res) => ({
      assetsDomestic: res.getTaxReturn.assets.filter((i) => !i.isForeign),
      assetsForeign: res.getTaxReturn.assets.filter((i) => i.isForeign),
      vehicles: res.getTaxReturn.vehicles,
    }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
  const router = useRouter()

  const assetsDomestic = data?.assetsDomestic || []
  const assetsForeign = data?.assetsForeign || []
  const vehicles = data?.vehicles || []

  const form = useAppForm({
    defaultValues: {
      assetsDomestic: assetsDomestic.map((i) => ({
        description: i.description,
        landNumber: i.landNumber,
        amount: i.amount.toString(),
      })),

      assetsForeign: assetsForeign.map((i) => ({
        description: i.description,
        country: i.landNumber,
        amount: i.amount.toString(),
      })),

      vehicles: vehicles.map((i) => ({
        licensePlate: i.licensePlate,
        yearOfPurchase: i.yearOfPurchase.toString(),
        amount: i.value.toString(),
      })),
    },
    onSubmit: async (values) => {
      const assets: UpdateTaxReturnInput['assets'] = [
        ...values.value.assetsDomestic.map((i) => ({
          description: i.description,
          landNumber: i.landNumber,
          amount: Number(i.amount),
          isForeign: false,
        })),
        ...values.value.assetsForeign.map((i) => ({
          description: i.description,
          landNumber: i.country,
          amount: Number(i.amount),
          isForeign: true,
        })),
      ]

      const vehicles: UpdateTaxReturnInput['vehicles'] =
        values.value.vehicles.map((i) => ({
          licensePlate: i.licensePlate,
          yearOfPurchase: Number(i.yearOfPurchase),
          value: Number(i.amount),
        }))

      await graphqlClient.upsertTaxReturn({
        input: {
          assets,
          vehicles,
        },
      })

      router.push('/umsokn/framtal/skuldir')
    },
  })

  if (isLoading) {
    return <Skeleton />
  }

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
        {error && <ErrorNotification />}
        <Text variant="h2" className="mb-4">
          4.1 - Fasteignir
        </Text>
        <Text variant="sm" className="mb-4">
          Innlendar fasteignir skv. fasteignamati.
        </Text>

        <form.Field name="assetsDomestic" mode="array">
          {(field) => {
            return (
              <div className="flex flex-col gap-6">
                {field.state.value.map((_, i) => {
                  return (
                    <div className="flex gap-4 items-end" key={i}>
                      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4 grow">
                        <form.AppField
                          name={`assetsDomestic[${i}].description`}
                        >
                          {(subField) => (
                            <subField.TextField label="Fasteign" size="md" />
                          )}
                        </form.AppField>
                        <form.AppField
                          name={`assetsDomestic[${i}].landNumber`}
                          children={(subField) => (
                            <subField.PatternField
                              label="Fastanúmer eignar"
                              format="###-####"
                              size="md"
                            />
                          )}
                        />
                        <form.AppField name={`assetsDomestic[${i}].amount`}>
                          {(subField) => (
                            <subField.NumericField
                              label="Fasteignamat"
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
                    onClick={() =>
                      field.pushValue({
                        description: '',
                        landNumber: '',
                        amount: '',
                      })
                    }
                    type="button"
                    size="default"
                  >
                    Ný fasteign <SvgAdd className="text-white" />
                  </Button>
                </div>
              </div>
            )
          }}
        </form.Field>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          4.2 - Erlendar fasteignir
        </Text>
        <Text variant="sm" className="mb-4">
          Erlendar fasteignir skv. fasteignamati.
        </Text>

        <form.Field name="assetsForeign" mode="array">
          {(field) => {
            return (
              <div className="flex flex-col gap-6">
                {field.state.value.map((_, i) => {
                  return (
                    <div className="flex gap-4 items-end" key={i}>
                      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4 grow">
                        <form.AppField name={`assetsForeign[${i}].description`}>
                          {(subField) => (
                            <subField.TextField label="Fasteign" size="md" />
                          )}
                        </form.AppField>
                        <form.AppField
                          name={`assetsForeign[${i}].country`}
                          children={(subField) => (
                            <subField.TextField label="Land" size="md" />
                          )}
                        />
                        <form.AppField name={`assetsForeign[${i}].amount`}>
                          {(subField) => (
                            <subField.NumericField
                              label="Fasteignamat"
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
                    onClick={() =>
                      field.pushValue({
                        description: '',
                        country: '',
                        amount: '',
                      })
                    }
                    type="button"
                    size="default"
                  >
                    Ný fasteign <SvgAdd className="text-white" />
                  </Button>
                </div>
              </div>
            )
          }}
        </form.Field>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          4.3 - Bifreiðar
        </Text>
        <Text variant="sm" className="mb-4">
          Bifreiðar skráðar á framteljanda.
        </Text>

        <form.Field name="vehicles" mode="array">
          {(field) => {
            return (
              <div className="flex flex-col gap-6 w-full">
                {field.state.value.map((_, i) => {
                  return (
                    <div className="flex gap-4 items-end w-full" key={i}>
                      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4 grow">
                        <form.AppField name={`vehicles[${i}].licensePlate`}>
                          {(subField) => (
                            <subField.TextField label="Númeraplata" size="md" />
                          )}
                        </form.AppField>
                        <form.AppField
                          name={`vehicles[${i}].yearOfPurchase`}
                          children={(field) => (
                            <field.TextField label="Kaupár" size="md" />
                          )}
                        />
                        <form.AppField name={`vehicles[${i}].amount`}>
                          {(subField) => (
                            <subField.NumericField label="Verð" size="md" />
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
                    onClick={() =>
                      field.pushValue({
                        licensePlate: '',
                        yearOfPurchase: '',
                        amount: '',
                      })
                    }
                    type="button"
                    size="default"
                  >
                    Ný lína <SvgAdd className="text-white" />
                  </Button>
                </div>
              </div>
            )
          }}
        </form.Field>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          4.4 - Hlutabréf
        </Text>
        <Text variant="sm" className="mb-4">
          Skráð og óskráð hlutabréf framteljanda.
        </Text>

        <div className="flex flex-col items-center gap-6 p-6 mb-4 border-2 border-dashed border-blue-300 rounded-lg">
          <Text variant="h4">Dragðu skjöl hingað til að hlaða upp</Text>
          <Text variant="sm" className="text-center">
            Þú getur hlaðið inn yfirliti um hlutabréfaeign þína á xls, csv eða
            pdf sniði og afkoma ársins verður reiknuð út.
          </Text>
          <Button variant="outline">Velja skjöl til að hlaða upp</Button>
        </div>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          4.5 - Rafmyntir
        </Text>
        <Text variant="sm" className="mb-4">
          Rafmynta eign í rafmyntkauphöllum og köldum veskjum.
        </Text>

        <div className="flex flex-col items-center gap-6 p-6 mb-4 border-2 border-dashed border-blue-300 rounded-lg">
          <Text variant="h4">Dragðu skjöl hingað til að hlaða upp</Text>
          <Text variant="sm" className="text-center">
            Þú getur hlaðið inn yfirliti um rafmyntaeign þína á xls, csv eða pdf
            sniði og afkoma ársins verður reiknuð út.
          </Text>
          <Button variant="outline">Velja skjöl til að hlaða upp</Button>
        </div>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/framtal/tekjur">Til baka</Link>
        </Button>
        <form.AppForm>
          <form.SubscribeButton label="Áfram í skuldir" />
        </form.AppForm>
      </div>
    </form>
  )
}
