import { StoreFront, StoreHeader } from '@/components'
import { fetchStoreById } from '@/services/store'

interface PageProps {
  params: { id: String }
}

const Store = async ({ params }: PageProps) => {
  const store = await fetchStoreById(params.id)

  return (
    <>
        <StoreHeader />
        <StoreFront store={store} />
    </>
  )
}

export default Store