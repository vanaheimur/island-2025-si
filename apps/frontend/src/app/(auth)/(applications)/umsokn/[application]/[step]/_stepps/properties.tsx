'use client'

import { useAppForm } from '@/components/form/form'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { graphqlClient } from '@/graphql/client'
import { GetTaxReturnQuery } from '@/graphql/generated'
import SvgAdd from '@/icons/Add'
import SvgRemove from '@/icons/Remove'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// TODO: fix when graphql is updated

type Asset = GetTaxReturnQuery['getTaxReturn']['assets'][0]
// type Vehicles = GetTaxReturnQuery['getTaxReturn']['vehicles'][0]

export default function Properties() {
  const [assetsDomestic, setAssetsDomestic] = useState<Asset[]>([])
  const [assetsForeign, setAssetsForeign] = useState<Asset[]>([])
  // const [vehicles, setVehicles] = useState<Vehicles[]>([])

  useEffect(() => {
    graphqlClient.getTaxReturn().then((res) => {
      setAssetsDomestic(res.getTaxReturn.assets.filter((i) => !i.isForeign))
      setAssetsForeign(res.getTaxReturn.assets.filter((i) => i.isForeign))
      // setVehicles(res.getTaxReturn.vehicles)
    })
  }, [])

  const form = useAppForm({
    defaultValues: {
      assetsDomestic: [
        // {
        //   description: 'Bláfjallagata 12',
        //   landNumber: '2109876',
        //   amount: '52000000',
        // },
        ...assetsDomestic.map((i) => ({
          description: i.description,
          landNumber: i.landNumber,
          amount: i.amount.toString(),
        })),
      ],
      assetsForeign: [
        // {
        //   description: 'Villa Portofino 5B',
        //   country: 'Spáni',
        //   amount: '27000000',
        // },
        ...assetsForeign.map((i) => ({
          description: i.description,
          country: i.landNumber,
          amount: i.amount.toString(),
        })),
      ],
      vehicles: [
        {
          licensePlate: 'KB-521',
          yearOfPurchase: '2021',
          amount: '3100000',
        },
        {
          licensePlate: 'JU-329',
          yearOfPurchase: '2012',
          amount: '430000',
        },
        // ...vehicles.map((i) => ({
        //   licensePlate: i.licensePlate,
        //   yearOfPurchase: i.yearOfPurchase,
        //   amount: i.amount.toString(),
        // })),
      ],
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
                    <div className="flex gap-6 items-center" key={i}>
                      <div className="grow">
                        <form.AppField
                          name={`assetsDomestic[${i}].description`}
                        >
                          {(subField) => (
                            <subField.TextField label="Fasteign" size="md" />
                          )}
                        </form.AppField>
                      </div>
                      <div className="grow">
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
                      </div>
                      <div className="grow">
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
                        variant="destructive"
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
                    <div className="flex gap-6 items-center" key={i}>
                      <div className="grow">
                        <form.AppField name={`assetsForeign[${i}].description`}>
                          {(subField) => (
                            <subField.TextField label="Fasteign" size="md" />
                          )}
                        </form.AppField>
                      </div>
                      <div className="grow">
                        <form.AppField
                          name={`assetsForeign[${i}].country`}
                          children={(subField) => (
                            <subField.TextField label="Land" size="md" />
                          )}
                        />
                      </div>
                      <div className="grow">
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
                        variant="destructive"
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
                    Nýr fasteign <SvgAdd className="text-white" />
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
              <div className="flex flex-col gap-6">
                {field.state.value.map((_, i) => {
                  return (
                    <div className="flex gap-6 items-center" key={i}>
                      <div className="grow">
                        <form.AppField name={`vehicles[${i}].licensePlate`}>
                          {(subField) => (
                            <subField.TextField label="Númeraplata" size="md" />
                          )}
                        </form.AppField>
                      </div>
                      <div className="grow">
                        <form.AppField
                          name={`vehicles[${i}].yearOfPurchase`}
                          children={(field) => (
                            <field.TextField label="Kaupár" size="md" />
                          )}
                        />
                      </div>
                      <div className="grow">
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
                        variant="destructive"
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
            pdf sniði og við reiknum út hagnað / tap ársins fyrir þig.
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
            Þú getur hlaðið inn yfirliti um hlutabréfaeign þína á xls, csv eða
            pdf sniði og við reiknum út hagnað / tap ársins fyrir þig.
          </Text>
          <Button variant="outline">Velja skjöl til að hlaða upp</Button>
        </div>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/framtal/tekjur">Til baka</Link>
        </Button>
        <Button size="lg">
          <Link href="/umsokn/framtal/skuldir">Áfram í skuldir</Link>
        </Button>
      </div>
    </form>
  )
}
