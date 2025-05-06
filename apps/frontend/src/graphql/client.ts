import { getSdk } from './generated'

import { GraphQLClient, RequestOptions } from 'graphql-request'

/**
 * Uses **fetch api** by default
 */
export const createPublicGraphQLClient = (
  requestConfig?: Partial<RequestOptions>,
) => {
  const endpoint =
    typeof window === 'undefined'
      ? `${process.env.BACKEND_BASE_API_URL ?? ''}/graphql`
      : `${window.location.origin}/api/graphql`

  const client = new GraphQLClient(`${endpoint}`, {
    credentials: 'include',
    ...requestConfig,
  })

  return getSdk(client)
}

export const graphqlClient = createPublicGraphQLClient()
