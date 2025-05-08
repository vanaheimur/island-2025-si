'use client'
import { graphqlClient } from '@/graphql/client'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Button } from '../ui/button'

export const Logout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        graphqlClient.logout().then(() => {
          router.push('/innskra')
        })
      }}
      variant="utility"
      className="max-md:hidden"
    >
      {children}
    </Button>
  )
}
