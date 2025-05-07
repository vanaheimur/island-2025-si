'use client'
import { NumericFormat } from 'react-number-format'
import { Input } from '../ui/input'
import { useFieldContext } from './form-context'

export function NumericField({
  label,
  size,
  thousandSeparator = '.',
  decimalSeparator = ',',
  ...props
}: {
  label: string
  size?: 'lg' | 'md' | 'sm'
  variant?: 'default' | 'outline' | 'ghost' | 'utility' | 'destructive'
} & Omit<
  React.ComponentProps<typeof NumericFormat>,
  'customInput' | 'value' | 'onChange' | 'size'
>) {
  // The `Field` infers that it should have a `value` type of `string`
  const field = useFieldContext<number | undefined>()
  return (
    <NumericFormat
      customInput={Input}
      label={label}
      value={field.state.value}
      decimalSeparator={decimalSeparator}
      thousandSeparator={thousandSeparator}
      onValueChange={(value) => field.handleChange(value.floatValue)}
      size={size}
      onBlur={() => field.handleBlur()}
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
