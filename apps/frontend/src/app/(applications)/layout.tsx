import Header from '@/components/header/header'

export default function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="bg-white">
        <Header type="application" />
      </div>
      <div className="bg-blueberry-100 grow pt-8 pb-10">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
