import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

export const CheckboxField = ({
  children,
  name,
  ...props
}: {
  children: React.ReactNode
  name: string
} & React.ComponentProps<typeof Checkbox>) => {
  return (
    <Label
      htmlFor={name}
      className="flex items-center gap-4 px-7 py-6 border border-blue-200 rounded-[8px] bg-blue-100 cursor-pointer"
    >
      <Checkbox id={name} {...props} />
      {children}
    </Label>
  )
}
