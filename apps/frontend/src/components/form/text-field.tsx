'use client'
import { Input } from '../ui/input'
import { useFieldContext } from './form-context'

export function TextField({
  label,
  size,
}: {
  label: string
  size?: 'lg' | 'md' | 'sm'
}) {
  // The `Field` infers that it should have a `value` type of `string`
  const field = useFieldContext<string>()
  return (
    <Input
      label={label}
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
      size={size}
      onBlur={() => field.handleBlur()}
      name={field.name}
      error={
        (field.form.state.submissionAttempts || field.state.meta.isBlurred) &&
        field.state.meta.errors.length
          ? field.state.meta.errors.map((e) => e.message).join(', ')
          : undefined
      }
    />
  )
}
