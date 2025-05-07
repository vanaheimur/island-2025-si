'use client'
import { CheckboxField as CheckboxFieldComponent } from '../checkbox-field/checkbox-field'
import { useFieldContext } from './form-context'

export function CheckboxField({
  label,
  name,
}: {
  label: string
  name?: string
}) {
  const field = useFieldContext<boolean>()

  return (
    <div>
      <CheckboxFieldComponent
        name={name || field.name}
        checked={field.state.value}
        onCheckedChange={(checked) => field.handleChange(checked === true)}
        onBlur={() => field.handleBlur()}
        aria-invalid={field.state.meta.errors.length > 0}
        aria-describedby={
          field.state.meta.errors.length ? `${field.name}-error` : undefined
        }
      >
        {label}
      </CheckboxFieldComponent>
      {field.state.meta.errors.length > 0 && (
        <div id={`${field.name}-error`} className="text-sm text-red-500 mt-1">
          {field.state.meta.errors.map((e) => e.message).join(', ')}
        </div>
      )}
    </div>
  )
}
