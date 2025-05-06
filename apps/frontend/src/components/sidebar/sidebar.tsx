import { Text } from '@/components/ui/text'
import Image from 'next/image'

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-6 md:sticky md:top-10">
      <div className="flex items-center bg-purple-100 p-8 rounded-[8px] gap-6">
        <div className="max-lg:hidden">
          <Image
            width="64"
            height="64"
            src="https://images.ctfassets.net/8k0h54kbe6bj/5y5K2hSSYAk3hzs7ZARe2X/f661c7af2ea66bda32651e3f2986d697/merki-skatturinn.png"
            alt=""
          />
        </div>
        <div className="">
          <Text variant="eyebrow" className="text-purple-600">
            Þjónustuaðili
          </Text>
          <Text variant="h4" className="text-purple-600">
            Skatt­urinn
          </Text>
        </div>
      </div>
      <div className="flex items-center bg-purple-100 p-8 rounded-[8px] gap-6">
        <div className="flex flex-col gap-4">
          <Text variant="eyebrow" className="text-purple-600">
            Tengt efni
          </Text>
          <Text className="text-purple-600">Bráðabirgða útreikningar</Text>
        </div>
      </div>
    </div>
  )
}
