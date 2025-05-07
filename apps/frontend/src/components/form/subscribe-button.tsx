import { Button } from '../ui/button'
import { useFormContext } from './form-context'

export function SubscribeButton({ label }: { label: string }) {
  const form = useFormContext()
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button size="lg" disabled={isSubmitting}>
          {label}
        </Button>
      )}
    </form.Subscribe>
  )
}
