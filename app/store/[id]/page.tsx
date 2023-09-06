import { StoreFront, StoreHeader } from '@/components'
import { fetchStoreById } from '@/services/store'
import { StoreProps } from '@/types'

interface PageProps {
  params: { id: String }
}

const Store = async ({ params }: PageProps) => {
  var store = await fetchStoreById(params.id)
  console.log("Store Pg", store)

  return (
    <div className="w-[100vw]">
        <StoreHeader />
        <StoreFront store={store} />
    </div>
  )
}

export default Store