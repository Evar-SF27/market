import { StoreFront, TopBar } from '@/components'
import { fetchStoreById } from '@/services/store.services'
import { fetchUserById } from '@/services/users.services'

interface PageProps {
  params: { id: String }
}

const Store = async ({ params }: PageProps) => {
  var store = await fetchStoreById(params.id)
  const user = await fetchUserById(store.user)

  store.user = user[0].username

  return (
    <div className="w-[100vw]">
        <TopBar />
        <StoreFront store={store} />
    </div>
  )
}

export default Store