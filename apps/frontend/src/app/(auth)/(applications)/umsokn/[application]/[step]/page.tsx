import { Stepper } from '@/components/stepper/stepper'
import Link from 'next/link'
import BasicInfo from './_stepps/basic-info'
import DataGathering from './_stepps/data-gathering'
import Debts from './_stepps/debts'
import Income from './_stepps/income'
import Properties from './_stepps/properties'
import Done from './_stepps/qqq'

type Props = {
  params: Promise<{
    application: string
    step: string
  }>
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
            href={`/umsokn/framtal/${step}`}
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
    <div className="md:grid md:grid-cols-12 gap-12">
      <div className="col-span-12 md:col-span-9">
        <div className="bg-white rounded-[8px] pt-20 pb-10">
          <div className="max-md:px-6 md:w-10/12 mx-auto">
            <StepComponent />
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-3 pt-4 flex flex-col max-md:hidden">
        <Stepper
          steps={[
            {
              label: 'Upplýsingasöfnun',
              step: '',
              active: step === 'upplysingasofnun',
            },
            {
              label: 'Almennar upplýsingar',
              step: '1',
              active: step === 'almennar-upplysingar',
            },
            {
              label: 'Tekjur',
              step: '2',
              active: step === 'tekjur',
              subSteps: [
                '2.1 - Tekjur frá launagreiðenda',
                '2.2 - Samsköttun',
                '2.3 - Lífeyrisgreiðslur, styrkir, greiðslur frá Tryggingastofnun 2.f2.',
                '2.4 - Dagpeningar, ökutækjastyrkur og önnur hlunnindi',
                '2.5 - Greinargerð um kaup og sölu á eignum',
                '2.6 - Erlendar tekjur',
                '2.7 - Skattfrjálsar tekjur',
                '2.10 - Hvað greiddir þú háa staðgreiðslu',
              ],
            },
            {
              label: 'Eignir',
              step: '3',
              active: step === 'eignir',
            },
            {
              label: 'Skuldir',
              step: '4',
              active: step === 'skuldir',
            },
            {
              label: 'Sjuddirarirei',
              step: '5',
              active: step === 'sjuddirarirei',
            },
          ]}
        />
        <img src="/assets/skatturinn.svg" alt="" className="mt-auto mb-4" />
      </div>
    </div>
  )
}
