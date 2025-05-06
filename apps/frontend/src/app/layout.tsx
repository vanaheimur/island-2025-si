import { Footer } from '@/components/footer/footer'
import Header from '@/components/header/header'
import { Sidebar } from '@/components/sidebar/sidebar'
import { Toaster } from '@/components/ui/sonner'
import SvgArrowBack from '@/icons/ArrowBack'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Island 2025',
  description: 'Island 2025',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased font-sans`}
      >
        <Header />
        <div className="container grid grid-cols-12 pb-12 pt-16">
          <div className="col-span-12 md:col-span-3 order-2 md:order-1">
            <button className="mb-6 flex items-center gap-2 text-blue-400 border-blue-400 border-b font-semibold text-xs">
              <SvgArrowBack className="size-4" /> Fjármál og skattar
            </button>
            <Sidebar />
          </div>
          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            {children}
          </div>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
