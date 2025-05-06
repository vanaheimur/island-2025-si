import { Stepper } from '@/components/stepper/stepper'
import Link from 'next/link'
import BasicInfo from './_stepps/basic-info'
import DataGathering from './_stepps/data-gathering'
import Income from './_stepps/income'
import Properties from './_stepps/properties'
import Debts from './_stepps/debts'
import Done from './_stepps/qqq'

type Props = {
  params: {
    application: string
    step: string
  }
}

const steps = {
  upplysingasofnun: DataGathering,
  'almennar-upplysingar': BasicInfo,
  tekjur: Income,
  eignir: Properties,
  skuldir: Debts,
  sjuddirarirei: Done,
} as const

const isStep = (step: string): step is keyof typeof steps =>
  Object.keys(steps).includes(step)

const NoStep = () => (
  <div>
    Skref fannst ekki, áttir þú við eitt af þessum skrefum:
    <ul className="list-disc ml-5 text-blue-400 marker:text-red-400 mt-4">
      {Object.keys(steps).map((step) => (
        <li key={step} className="space-y-2">
          <Link
            href={`/umsokn/skattframtal/${step}`}
            className="underline text-blue-400"
          >
            umsokn/skattframtal/{step}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default async function StepPage({ params }: Props) {
  const { application, step } = await params

  const StepComponent = isStep(step) ? steps[step] : NoStep

  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-12 md:col-span-9">
        <div className="bg-white rounded-[8px] pt-20 pb-10">
          <div className="max-md:px-6 md:w-10/12 mx-auto">
            <StepComponent />
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-3 pt-20">
        <Stepper />
      </div>
    </div>
  )
}
