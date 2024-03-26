import { dehydrate, Hydrate } from '@tanstack/react-query'
import getQueryClient from './getQueryClient'

export default async function HydratedOptions() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['options'], queryFn: getOptions })
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <Options />
    </Hydrate>
  )
}