import { createFormHook } from '@tanstack/react-form'
import { CheckboxField } from './checkbox-field'
import { fieldContext, formContext } from './form-context'
import { NumericField } from './numeric-field'
import { PatternField } from './pattern-field'
import { RadioGroupField } from './radiogroup-field'
import { SelectField } from './select-field'
import { SubscribeButton } from './subscribe-button'
import { TextField } from './text-field'

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    SelectField,
    PatternField,
    NumericField,
    CheckboxField,
    RadioGroupField,
  },
  formComponents: {
    SubscribeButton,
  },
  fieldContext,
  formContext,
})

export { useAppForm }
