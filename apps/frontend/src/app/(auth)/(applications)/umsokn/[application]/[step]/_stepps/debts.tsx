'use client'

import { useAppForm } from '@/components/form/form'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { graphqlClient } from '@/graphql/client'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import Link from 'next/link'
import { ErrorNotification } from './fetch-error'
import { Skeleton } from './skeleton'

export default function Debts() {
  const {
    data: taxReturnData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['taxReturn'],
    queryFn: () => graphqlClient.getTaxReturn(),
  })

  const mortgage = taxReturnData?.getTaxReturn.mortgages?.[0] || null
  const propertyValue =
    taxReturnData?.getTaxReturn.assets?.[0]?.amount?.toString() || ''
  const otherDebt = taxReturnData?.getTaxReturn.otherDebts || []

  const form = useAppForm({
    defaultValues: {
      // mortgage
      residentialLocation: mortgage?.residentialLocation ?? '', // 'Bláfjallagata 12',
      yearOfPurchase: mortgage?.yearOfPurchase ?? '', // '2021',
      propertyValue: propertyValue, // '52000000',
      lenderName: mortgage?.lenderName ?? '', // 'Íslandsbanki hf.',
      lenderNationalId: mortgage?.lenderNationalId ?? '', // '4910080160',
      loanNumber: mortgage?.loanNumber ?? '', // '56783900123',
      loanDate: mortgage?.loanDate ?? '', // '15.júní 2021',
      loanTermInYears: mortgage?.loanTermInYears ?? '', // '30',
      totalPaymentsForTheYear: mortgage?.totalPaymentsForTheYear ?? '', // '2280000',
      installmentOfNominalValue: mortgage?.installmentOfNominalValue ?? '', // '1360000',
      interestExpenses: mortgage?.interestExpenses ?? '', // '920000',
      remainingDebt: mortgage?.remainingDebt ?? '', // '28540000',
      soldNotBoughtNew: false,
      otherDebts: [
        {
          description: 'Eftirstöðvar á korti númer: 4469 88XX XXXX 4567',
          interestExpenses: '39200',
          remainingDebt: '217000',
        },
        {
          description: 'Aukalán',
          interestExpenses: '86000',
          remainingDebt: '980000',
        },
        {
          description: '0142-26-732645 Varðan',
          interestExpenses: '14500',
          remainingDebt: '62000',
        },
        {
          description: 'Kílómetragjald, Skatturinn',
          interestExpenses: '0',
          remainingDebt: '2370',
        },
        {
          description: 'Þing- og sveitarsjóðsgjöld, Skatturinn',
          interestExpenses: '224',
          remainingDebt: '0',
        },
        ...otherDebt.map((debt) => ({
          description: debt.description,
          interestExpenses: debt.interestExpenses.toString(),
          remainingDebt: debt.remainingDebt.toString(),
        })),
      ],
    },
    onSubmit: async (values) => {
      await graphqlClient.upsertTaxReturn({
        input: {
          otherDebts: values.value.otherDebts.map((debt) => ({
            description: debt.description,
            interestExpenses: parseFloat(debt.interestExpenses),
            remainingDebt: parseFloat(debt.remainingDebt),
          })),
        },
      })
    },
  })

  const lenderName = form.getFieldValue('lenderName')
  const lenderNationalId = form.getFieldValue('lenderNationalId')
  const loanNumber = form.getFieldValue('loanNumber')
  const loanDate = form.getFieldValue('loanDate')
  const loanTermInYears = form.getFieldValue('loanTermInYears')

  // Error notification at the top of the page

  // Loading skeleton that mirrors the actual form structure
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
          5.1 - Vaxtagjöld
        </Text>
        <Text variant="sm" className="mb-4">
          Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota.
        </Text>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
            <form.AppField
              name="residentialLocation"
              children={(field) => (
                <field.TextField label="Heimilisfang" size="md" />
              )}
            />
            <form.AppField
              name="yearOfPurchase"
              children={(field) => (
                <field.PatternField label="Kaupár" format="####" size="md" />
              )}
            />
            <form.AppField
              name="propertyValue"
              children={(field) => (
                <field.NumericField label="Fasteignamat" size="md" />
              )}
            />
          </div>

          <div className="flex gap-4">
            {/* <Text className="w-full">Lánveitandi</Text> */}
            <Text variant="h2" className="mb-4">
              {lenderName}
            </Text>
            <Text variant="h2" className="mb-4">
              {lenderNationalId}
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex gap-1 w-full">
              <Text size="sm" as="span">
                Lánsnúmer:
              </Text>
              <Text size="sm" as="span" className="text-blue-400">
                {loanNumber}
              </Text>
            </div>
            <div className="flex gap-1 w-full">
              <Text size="sm" as="span">
                Lántökudagur:
              </Text>
              <Text size="sm" as="span" className="text-blue-400">
                {loanDate ? format(loanDate, 'dd.MM.yyyy') : '-'}
              </Text>
            </div>
            <div className="flex gap-1 w-full">
              <Text size="sm" as="span">
                Lánstími:
              </Text>
              <Text size="sm" as="span" className="text-blue-400">
                {loanTermInYears} ár
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
            <form.AppField
              name="totalPaymentsForTheYear"
              children={(field) => (
                <field.NumericField label="Heildargreiðsla ársins" size="md" />
              )}
            />
            <form.AppField
              name="installmentOfNominalValue"
              children={(field) => (
                <field.NumericField label="Afborgun á nafnverði" size="md" />
              )}
            />
            <form.AppField
              name="interestExpenses"
              children={(field) => (
                <field.NumericField label="Vaxtagjöld" size="md" />
              )}
            />
          </div>

          <div>
            <form.AppField
              name="remainingDebt"
              children={(field) => (
                <field.NumericField label="Eftirstöðvar" size="md" />
              )}
            />
          </div>
        </div>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          5.2 - Sala fasteigna
        </Text>
        <Text variant="sm" className="mb-4">
          Ef eign var seld og önnur ekki keypt í staðin skal merka hér
        </Text>
        <form.AppField name="soldNotBoughtNew">
          {(subField) => (
            <subField.CheckboxField label="Ég seldi fasteign og keypti ekki aðra" />
          )}
        </form.AppField>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          5.3 - Aðrar skuldir og vaxtagjöld
        </Text>
        <Text variant="sm" className="mb-4">
          Allar aðrar skuldir og vaxtagjöld
        </Text>

        <form.Field name="otherDebts" mode="array">
          {(field) => {
            return (
              <div className="flex flex-col gap-6">
                {field.state.value.map((_, i) => {
                  return (
                    <div
                      className="flex gap-2 items-center max-lg:flex-wrap"
                      key={i}
                    >
                      <div className="w-full lg:w-8/12 xl:w-3/5">
                        <form.AppField name={`otherDebts[${i}].description`}>
                          {(subField) => (
                            <subField.TextField label="Lýsing" size="md" />
                          )}
                        </form.AppField>
                      </div>
                      <div className="w-[calc(50%-4px)] lg:w-4/12 xl:w-1/5">
                        <form.AppField
                          name={`otherDebts[${i}].interestExpenses`}
                        >
                          {(subField) => (
                            <subField.NumericField
                              label="Vaxtagjöld"
                              size="md"
                            />
                          )}
                        </form.AppField>
                      </div>
                      <div className="w-[calc(50%-4px)] lg:w-4/12 xl:w-1/5">
                        <form.AppField name={`otherDebts[${i}].remainingDebt`}>
                          {(subField) => (
                            <subField.NumericField
                              label="Eftirstöðvar skuldar"
                              size="md"
                            />
                          )}
                        </form.AppField>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          }}
        </form.Field>
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          5.4 - Heildarskuldir
        </Text>
        <Text variant="sm" className="mb-4">
          Heildarskuldir samkvæmt samræmingarblaði RSK 4.05
        </Text>
      </div>

      <div className="flex justify-between">
        <Button asChild variant="outline" size="lg">
          <Link href="/umsokn/framtal/eignir">Til baka</Link>
        </Button>
        <Button size="lg" asChild>
          <Link href="/umsokn/framtal/skilad">Klára framtal</Link>
        </Button>
      </div>
    </form>
  )
}
