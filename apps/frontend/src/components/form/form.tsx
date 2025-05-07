import { createFormHook } from '@tanstack/react-form'
import { fieldContext, formContext } from './form-context'
import { SelectField } from './select-field'
import { SubscribeButton } from './subscribe-button'
import { TextField } from './text-field'

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    SelectField,
  },
  formComponents: {
    SubscribeButton,
  },
  fieldContext,
  formContext,
})

export { useAppForm }
