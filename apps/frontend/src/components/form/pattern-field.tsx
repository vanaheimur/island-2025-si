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
} & Omit<
  React.ComponentProps<typeof PatternFormat>,
  'customInput' | 'value' | 'onChange'
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
      {...props}
    />
  )
}
