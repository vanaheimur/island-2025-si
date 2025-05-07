'use client'

import { useAppForm } from '@/components/form/form'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
// import SvgAdd from '@/icons/Add'
// import SvgRemove from '@/icons/Remove'
import Link from 'next/link'

export default function Debts() {
  const form = useAppForm({
    defaultValues: {
      // mortgage
      residentialLocation: 'Bláfjallagata 12',
      yearOfPurchase: '2021',
      propertyValue: '52000000',
      lenderName: 'Íslandsbanki hf.',
      lenderNationalId: '4910080160',
      loanNumber: '56783900123',
      loanDate: '15.júní 2021',
      loanTermInYears: '30',
      totalPaymentsForTheYear: '2280000',
      installmentOfNominalValue: '1360000',
      interestExpenses: '920000',
      remainingDebt: '28540000',
      // other debts
      otherDebts: [],
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const lenderName = form.getFieldValue('lenderName')
  const lenderNationalId = form.getFieldValue('lenderNationalId')
  const loanNumber = form.getFieldValue('loanNumber')
  const loanDate = form.getFieldValue('loanDate')
  const loanTermInYears = form.getFieldValue('loanTermInYears')

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
          5.1 - Vaxtagjöld
        </Text>
        <Text variant="sm" className="mb-4">
          Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota.
        </Text>

        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-4">
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

          <div className="flex gap-4 justify-between">
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
                {loanDate}
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

          <div className="flex gap-4">
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
      </div>

      <div>
        <Text variant="h2" className="mb-4">
          5.3 - Aðrar skuldir og vaxtagjöld
        </Text>
        <Text variant="sm" className="mb-4">
          Allar aðrar skuldir og vaxtagjöld
        </Text>
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
        <Button size="lg">
          <Link href="/umsokn/framtal/sjuddirarirei">
            Áfram í sjuddirarirei
          </Link>
        </Button>
      </div>
    </form>
  )
}
