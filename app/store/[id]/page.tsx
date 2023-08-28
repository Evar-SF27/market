import { StoreFront, StoreHeader } from '@/components'
import { fetchStoreById } from '@/services/store'
import { StoreProps } from '@/types'

interface PageProps {
  params: { id: String }
}

const Store = async ({ params }: PageProps) => {
  var store = await fetchStoreById(params.id)
  console.log("store", store)

  return (
    <>
        <StoreHeader />
        <StoreFront store={store} />
    </>
  )
}

export default Store