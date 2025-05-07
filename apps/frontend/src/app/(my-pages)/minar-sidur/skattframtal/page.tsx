import Header from '@/components/header/header'

export default function MyPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="bg-white">
        <Header />
      </div>
      <div className="grow pt-8 pb-10">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
