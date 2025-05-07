'use client'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { useFieldContext } from './form-context'

export function RadioGroupField({
  options,
  className,
}: {
  options: Array<{ value: string; label: string }>
  className?: string
}) {
  const field = useFieldContext<string>()

  return (
    <div>
      <RadioGroup
        value={field.state.value}
        onValueChange={(value) => field.handleChange(value)}
        onBlur={() => field.handleBlur()}
        className={className}
        aria-invalid={field.state.meta.errors.length > 0}
        aria-describedby={
          field.state.meta.errors.length ? `${field.name}-error` : undefined
        }
      >
        {options.map((option) => (
          <div
            key={option.value}
            className="flex items-center gap-4 px-7 py-6 border border-blue-200 rounded-[8px] bg-blue-100 relative"
          >
            <RadioGroupItem
              value={option.value}
              id={`${field.name}-${option.value}`}
              onBlur={() => field.handleBlur()}
            />
            <Label
              htmlFor={`${field.name}-${option.value}`}
              className={`cursor-pointer after:inset-0 after:absolute ${field.state.value === option.value ? 'font-semibold' : ''}`}
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {field.state.meta.errors.length > 0 && (
        <div id={`${field.name}-error`} className="text-sm text-red-500 mt-1">
          {field.state.meta.errors.map((e) => e.message).join(', ')}
        </div>
      )}
    </div>
  )
}
