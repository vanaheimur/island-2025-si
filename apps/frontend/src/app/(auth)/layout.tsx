import { AuthGuard } from './AuthGuard'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGuard>
      <div>{children}</div>
    </AuthGuard>
  )
}
