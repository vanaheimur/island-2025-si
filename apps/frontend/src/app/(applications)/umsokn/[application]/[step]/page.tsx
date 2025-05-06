import { Stepper } from '@/components/stepper/stepper'
import DataGathering from './_stepps/data-gathering'

type Props = {
  params: {
    application: string
    step: string
  }
}

export default async function StepPage({ params }: Props) {
  const { application, step } = await params

  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-12 md:col-span-9">
        <div className="bg-white rounded-[8px] pt-20 pb-10">
          <div className="max-md:px-6 md:w-10/12 mx-auto">
            <DataGathering />
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-3 pt-20">
        <Stepper />
      </div>
    </div>
  )
}
