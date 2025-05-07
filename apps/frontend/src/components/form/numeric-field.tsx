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
} & Omit<
  React.ComponentProps<typeof NumericFormat>,
  'customInput' | 'value' | 'onChange'
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
      {...props}
    />
  )
}
