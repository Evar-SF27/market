import { StoreFront, StoreHeader } from '@/components'
import { fetchCategories } from '@/services/categories'
import { fetchStoreById } from '@/services/store'


interface PageProps {
  params: { id: String }
}

const Store = async ({ params }: PageProps) => {
  const store = await fetchStoreById(params.id)
  const categories = await fetchCategories()

  return (
    <>
        <StoreHeader />
        <StoreFront store={store[0]} categories={categories} />
    </>
  )
}

export default Store