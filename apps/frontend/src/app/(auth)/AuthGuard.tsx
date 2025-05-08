'use client'

import { Text } from '@/components/ui/text'
import { graphqlClient } from '@/graphql/client'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

interface AuthGuardProps {
  children: ReactNode
}

/**
 * AuthGuard component that handles authentication checking and redirection
 * Redirects unauthenticated users to the login page
 */
export const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<null | { name: string; nationalId: string }>(
    null,
  )

  useEffect(() => {
    let isMounted = true
    
    // If we already have a user, don't refetch
    if (user) {
      setLoading(false)
      return () => {
        isMounted = false
      }
    }
    
    setLoading(true)
    graphqlClient
      .getUser()
      .then((res) => {
        if (isMounted) {
          if (res?.getUser) {
            setUser(res.getUser)
            setLoading(false)
          } else {
            router.push('/innskra')
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          router.push('/innskra')
        }
      })
    return () => {
      isMounted = false
    }
  }, [router, user])

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="container mx-auto my-16 flex max-w-xl flex-col items-center justify-center gap-4 p-4">
        <Text variant="h3">Augnablik</Text>
      </div>
    )
  }

  // Only render children if authenticated and is an auth user
  return user ? <>{children}</> : null
}

export default AuthGuard
