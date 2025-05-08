'use client'

import { useAppForm } from '@/components/form/form'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { graphqlClient } from '@/graphql/client'
import {
  GetTaxReturnQuery,
  IncomeCategory,
  UpdateTaxReturnInput,
} from '@/graphql/generated'
import SvgAdd from '@/icons/Add'
import SvgRemove from '@/icons/Remove'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Income = GetTaxReturnQuery['getTaxReturn']['incomes'][0]

export default function Income() {
  const [incomeEmployer, setIncomeEmployer] = useState<Income[]>([])
  const [incomeOther, setIncomeOther] = useState<Income[]>([])

  useEffect(() => {
    graphqlClient.getTaxReturn().then((res) => {
      setIncomeEmployer(
        res.getTaxReturn.incomes.filter((i) => i.incomeCategoryId === 1),
      )
      setIncomeOther(
        res.getTaxReturn.incomes.filter((i) => i.incomeCategoryId !== 1),
      )
    })
  }, [])

  const form = useAppForm({
    defaultValues: {
      incomeEmployer: [
        // { description: 'Norðurljós Software ehf', amount: '9360000' },
        // { description: 'Mús & Merki ehf.', amount: '900000' },
        ...incomeEmployer.map((i) => ({
          description: i.description,
          amount: i.amount.toString(),
        })),
      ],
      incomeOther: [
        // {
        //   description: 'Íþróttastyrkur',
        //   incomeCategory: '6',
        //   amount: '1000000',
        // },
        // {
        //   description: 'Starfsmennastyrkur',
        //   incomeCategory: '7',
        //   amount: '2000000',
        // },
        ...incomeOther.map((i) => ({
          description: i.description,
          incomeCategory: i.incomeCategoryId.toString(),
          amount: i.amount.toString(),
        })),
      ],
      grants: [{ grantCategory: '3', amount: '1000000' }],
    },
    onSubmit: async (values) => {
      const income: UpdateTaxReturnInput['incomes'] = []

      values.value.incomeEmployer.forEach((i) => {
        income.push({
          description: i.description,
          amount: parseInt(i.amount),
          category: IncomeCategory.Salary,
        })
      })

      values.value.incomeOther.forEach((i) => {
        income.push({
          description: i.description,
          amount: parseInt(i.amount),
          category: IncomeCategory.OtherBenefit,
        })
      })

      values.value.grants.forEach((i) => {
        income.push({
          description: 'Styrkir',
          amount: parseInt(i.amount),
          category: IncomeCategory.Allowance,
        })
      })

      await graphqlClient.upsertTaxReturn({
        input: {
          incomes: income,
        },
      })
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
          2.1 - Tekjur frá launagreiðenda
        </Text>
        <Text variant="sm" className="mb-4">
          Laun og launatengdar greiðslur.
        </Text>

        <form.Field name="incomeEmployer" mode="array">
          {(field) => {
            return (
              <div className="flex flex-col gap-6">
                {field.state.value.map((_, i) => {
                  return (
                    <div className="flex gap-4 items-end" key={i}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 grow">
                        <form.AppField
                          name={`incomeEmployer[${i}].description`}
                        >
                          {(subField) => (
                            <subField.TextField
                              label="Nafn launagreiðanda"
                              size="md"
                            />
                          )}
                        </form.AppField>
                        <form.AppField name={`incomeEmployer[${i}].amount`}>
                          {(subField) => (
                            <subField.NumericField
                              label="Launafjárhæð"
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
                      field.pushValue({ description: '', amount: '' })
                    }
                    type="button"
                    size="default"
                  >
                    Nýr launagreiðandi <SvgAdd />
                  </Button>
                </div>
              </div>
            )
          }}
        </form.Field>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          2.2 - Samsköttun
        </Text>
        <Text variant="sm" className="mb-4">
          Einstaklingar í óvígðri sambúð sem uppfylla skilyrði, geta óskað eftir
          samsköttun með að merkja í reitinn.
        </Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          2.3 - Lífeyrisgreiðslur, styrkir, greiðslur frá Tryggingastofnun o.fl.
        </Text>
        <Text variant="sm" className="mb-4">
          Hér koma t.d. greiðslur úr almennum lífeyrissjóðum, atvinnuleysisbætur
          og félagsleg aðstoð.
        </Text>

        <form.Field name="incomeOther" mode="array">
          {(field) => {
            return (
              <div className="flex flex-col gap-6">
                {field.state.value.map((_, i) => {
                  return (
                    <div className="flex gap-4 items-end" key={i}>
                      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4 grow">
                        <form.AppField name={`incomeOther[${i}].description`}>
                          {(subField) => (
                            <subField.TextField
                              label="Styrkveitandi"
                              size="md"
                            />
                          )}
                        </form.AppField>
                        <form.AppField
                          name={`incomeOther[${i}].incomeCategory`}
                          children={(subField) => (
                            <subField.SelectField
                              label="Tegund styrks"
                              options={[
                                { label: 'Íþróttastyrkur', value: '6' },
                                { label: 'Starfsmennastyrkur', value: '7' },
                              ]}
                              size="sm"
                            />
                          )}
                        />
                        <form.AppField name={`incomeOther[${i}].amount`}>
                          {(subField) => (
                            <subField.NumericField label="Upphæð" size="md" />
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
                        incomeCategory: '',
                        amount: '',
                      })
                    }
                    type="button"
                    size="default"
                  >
                    Nýr styrkur <SvgAdd className="text-white" />
                  </Button>
                </div>
              </div>
            )
          }}
        </form.Field>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          2.4 - Dagpeningar, ökutækjastyrkur og önnur hlunnindi
        </Text>
        <Text variant="sm" className="mb-4">
          Hér koma dagpeningagreiðslur, ökutækjastyrkir og önnur hlunnindi.
        </Text>

        <form.Field name="grants" mode="array">
          {(field) => {
            return (
              <div className="flex flex-col gap-6">
                {field.state.value.map((_, i) => {
                  return (
                    <div className="flex gap-4 items-center" key={i}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 grow">
                        <form.AppField
                          name={`grants[${i}].grantCategory`}
                          children={(subField) => (
                            <subField.SelectField
                              label="Tegund hlunninda"
                              options={[
                                { label: 'Ökutækjastyrkur', value: '2' },
                                { label: 'Dagpeningar', value: '3' },
                                { label: 'Bifreiðahlunnindi', value: '4' },
                                { label: 'Húsnæðishlunnindi', value: '5' },
                              ]}
                              size="sm"
                            />
                          )}
                        />
                        <form.AppField name={`grants[${i}].amount`}>
                          {(subField) => (
                            <subField.NumericField label="Upphæð" size="md" />
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
                      field.pushValue({ grantCategory: '', amount: '' })
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
          2.5 - Greinargerð um sölu á eignum
        </Text>
        <Text variant="sm" className="mb-4">
          Tilgreinið kaup og sölu hvers konar lausafjár, ökutækja, hjólhýsa
          o.s.fv.
        </Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          2.6 - Erlendar tekjur
        </Text>
        <Text variant="sm" className="mb-4">
          Erlendar tekjur, laun o.s.fv.
        </Text>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          2.7 - Skattfrjálsar tekjur
        </Text>
        <Text variant="sm" className="mb-4">
          Skattfrjálsar tekjur, happdrættisvinningar o.s.fv.
        </Text>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/framtal/almennar-upplysingar">Til baka</Link>
        </Button>
        <Button size="lg">
          <Link href="/umsokn/framtal/eignir">Áfram í eignir</Link>
        </Button>
      </div>
    </form>
  )
}
