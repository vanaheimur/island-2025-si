import SvgCheckmark from '@/icons/Checkmark'
import clsx from 'clsx'
import { Text } from '../ui/text'

export const Stepper = ({
  steps = [],
}: {
  steps: { label: string; step: string; active: boolean; subSteps?: string[] }[]
}) => {
  const activeStep = steps.find((step) => step.active)

  return (
    <div>
      {steps.map((step, i) => {
        const isDone = parseInt(step.step) < parseInt(activeStep?.step || '0')
        return (
          <div
            key={step.step}
            className={clsx(
              isDone ? 'after:border-purple-400' : 'after:border-purple-300',
              {
                'relative after:border-l-2 after:absolute after:left-0 after:top-0 after:h-[calc(100%+10px)] after:-translate-x-1/2 pb-8 after:translate-y-2':
                  i !== steps.length - 1,
              },
            )}
          >
            <div className="flex items-center gap-2 relative pl-8 z-10">
              <span
                className={clsx(
                  'shrink-0 flex items-center justify-center rounded-full absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2',
                  {
                    'bg-purple-400 size-8': step.active || isDone,
                    'bg-purple-300 size-4': !(step.active || isDone),
                  },
                )}
              >
                {(isDone || step.active) && (
                  <Text variant="h5" className="text-white">
                    {isDone && <SvgCheckmark className="size-5" />}

                    {step.active && step.step}
                  </Text>
                )}
              </span>
              <Text
                variant={step.active ? 'h5' : 'md'}
                className={clsx(
                  step.active ? 'text-dark-400' : 'text-dark-300',
                )}
              >
                {step.label}
              </Text>
            </div>
            {step.subSteps && step.active && (
              <div className="flex flex-col gap-2 pl-8 mt-4">
                {step.subSteps.map((subStep) => (
                  <Text key={subStep} className="text-dark-400">
                    {subStep}
                  </Text>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
