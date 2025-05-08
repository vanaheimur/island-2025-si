import Header from '@/components/header/header'
import { Text } from '@/components/ui/text'
import SvgArrowBack from '@/icons/ArrowBack'
import SvgFileTrayFullOutline from '@/icons/FileTrayFullOutline'

export default function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="bg-blue-100">
        <Header type="my-pages" />
      </div>
      <div className="container grid grid-cols-12 pb-12 pt-8 md:pt-16">
        <div className="col-span-12 md:col-span-3 mb-10">
          <button className="max-md:hidden mb-6 flex items-center gap-2 text-blue-400 border-blue-400 border-b font-semibold text-xs">
            <SvgArrowBack className="size-4" /> Fjármál og skattar
          </button>
          <div className="bg-blue-100 rounded-[8px]">
            <div className="px-8 py-6 border-b border-blue-200">
              <Text
                weight="bold"
                className="text-blue-600 flex items-center gap-2"
              >
                <SvgFileTrayFullOutline className="size-6" /> Skattar
              </Text>
            </div>
            <div className="px-8 py-6 flex flex-col gap-4">
              <Text variant="md" className="text-blue-400 font-semibold">
                Skattframtöl
              </Text>
              <Text
                variant="md"
                className="text-blue-600 hover:text-blue-400 cursor-pointer"
              >
                Bráðabirgða&shy;útreikningur
              </Text>
              <Text
                variant="md"
                className="text-blue-600 hover:text-blue-400 cursor-pointer"
              >
                Ársreikningur
              </Text>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-start-5 md:col-span-8">
          <div className="mb-6 max-md:hidden flex items-center gap-2 text-blue-400 font-semibold">
            Yfirlit <div className="bg-blue-400 size-1"></div> Fjármál og
            skattar <div className="bg-blue-400 size-1"></div>
            Skattframtal
          </div>
          {children}
        </div>
      </div>
    </>
  )
}
