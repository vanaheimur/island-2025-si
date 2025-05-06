import { Footer } from '@/components/footer/footer'
import Header from '@/components/header/header'
import { Sidebar } from '@/components/sidebar/sidebar'
import SvgArrowBack from '@/icons/ArrowBack'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="container grid grid-cols-12 pb-12 pt-8 md:pt-16">
        <div className="col-span-12 md:hidden">
          <button className="mb-6 flex items-center gap-2 text-blue-400 border-blue-400 border-b font-semibold text-xs">
            <SvgArrowBack className="size-4" /> Fjármál og skattar
          </button>
        </div>
        <div className="col-span-12 md:col-span-3 order-2 md:order-1">
          <button className="max-md:hidden mb-6 flex items-center gap-2 text-blue-400 border-blue-400 border-b font-semibold text-xs">
            <SvgArrowBack className="size-4" /> Fjármál og skattar
          </button>
          <Sidebar />
        </div>
        <div className="col-span-12 md:col-span-9 order-1 md:order-2">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
