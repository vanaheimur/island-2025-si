'use client'

import { useAppForm } from '@/components/form/form'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Text } from '@/components/ui/text'

export default function Auth() {
  const form = useAppForm({
    defaultValues: {
      phone: '',
    },
    onSubmit: (values) => {
      console.log('phone:', values.value.phone, typeof values.value.phone)
    },
  })

  return (
    <div className="flex flex-col items-center">
      <div className="w-md">
        <div className="flex flex-col items-center gap-2 mb-4 mt-4 pt-2 pb-8 px-6 border border-blue-200 md:mt-20 lg:mt-40">
          <div className="-mt-10 bg-white p-3">
            <Logo iconOnly />
          </div>

          <Text variant="sm" className="mt-4 mb-1 text-blue-400" weight="bold">
            Rafræn skilríki í síma
          </Text>
          <Text variant="h2" className="mb-2">
            Skráðu þig inn
          </Text>
          <Text className="mb-4">Ísland.is - Mínar síður</Text>

          <form
            className="flex flex-col gap-6 w-full"
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              form.handleSubmit()
            }}
          >
            <form.AppField
              name="phone"
              children={(field) => (
                <field.PatternField
                  label="Símanúmer"
                  format="###-####"
                  placeholder="000-0000"
                />
              )}
            />

            <div className="flex items-center gap-4">
              <Checkbox id="remember" className="cursor-pointer" />
              <Label htmlFor="remember" className="cursor-pointer">
                Muna símanúmer
              </Label>
            </div>

            <form.AppForm>
              <form.SubscribeButton label="Auðkenna" />
            </form.AppForm>
          </form>

          <div className="border-t border-blue-200 mt-8 w-full text-center"></div>
          <Text variant="xs" className="-mt-8 bg-white p-4 inline-block">
            Eða skráðu þig inn með
          </Text>

          <Button variant="outline" className="w-full">
            Auðkennisappinu
          </Button>
          <Button variant="outline" className="w-full">
            Skilríki á korti
          </Button>
        </div>
        <div className="flex justify-between">
          <Text weight="bold" className="text-blue-400 cursor-pointer">
            Skilmálar
          </Text>
          <div className="flex items-center gap-2">
            <Text weight="bold" className="text-blue-400 cursor-pointer">
              English
            </Text>
            |
            <Text weight="bold" className="text-blue-400 cursor-pointer">
              Aðstoð
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
