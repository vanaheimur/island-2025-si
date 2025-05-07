export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="grow pt-8 pb-10">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
