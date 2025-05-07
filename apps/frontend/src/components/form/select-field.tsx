'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { useFieldContext } from './form-context'

export type SelectOption = {
  value: string
  label: string
}

interface SelectFieldProps {
  label: string
  size?: 'sm' | 'default'
  options: SelectOption[]
  placeholder?: string
  error?: string
}

export function SelectField({
  label,
  size = 'default',
  options,
  placeholder = 'Select an option',
  error,
}: SelectFieldProps) {
  // The Field infers that it should have a value type of string
  const field = useFieldContext<string>()

  return (
    <Select
      value={field.state.value}
      onValueChange={(value) => field.handleChange(value)}
    >
      <SelectTrigger label={label} size={size} error={error}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
