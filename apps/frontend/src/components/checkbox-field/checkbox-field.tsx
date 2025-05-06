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
    <div className="flex items-center gap-4 px-7 py-6 border border-blue-200 rounded-[8px] bg-blue-100 relative">
      <Checkbox id={name} {...props} />
      <Label
        htmlFor={name}
        className="cursor-pointer after:inset-0 after:absolute"
      >
        {children}
      </Label>
    </div>
  )
}
