'use client'
import { PatternFormat } from 'react-number-format'
import { Input } from '../ui/input'
import { useFieldContext } from './form-context'

export function PatternField({
  label,
  size,
  ...props
}: {
  label: string
  size?: 'lg' | 'md' | 'sm'
  variant?: 'default' | 'outline' | 'ghost' | 'utility' | 'destructive'
} & Omit<
  React.ComponentProps<typeof PatternFormat>,
  'customInput' | 'value' | 'onChange' | 'size'
>) {
  // The `Field` infers that it should have a `value` type of `string`
  const field = useFieldContext<string>()
  return (
    <PatternFormat
      customInput={Input}
      label={label}
      value={field.state.value}
      onValueChange={(value) => field.handleChange(value.value)}
      size={size}
      onBlur={() => field.handleBlur()}
      name={field.name}
      error={
        (field.form.state.submissionAttempts || field.state.meta.isBlurred) &&
        field.state.meta.errors.length
          ? field.state.meta.errors.map((e) => e.message).join(', ')
          : undefined
      }
      {...props}
    />
  )
}
