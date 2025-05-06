import Header from '@/components/header/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="bg-white">
        <Header />
      </div>
      <div className="bg-blueberry-100 grow pt-8 pb-10">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
