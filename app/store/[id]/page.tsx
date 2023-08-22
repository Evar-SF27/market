import { StoreFront, StoreHeader } from '@/components'
import axios from '@/config/axios'


interface PageProps {
  params: { id: String }
}

const Store = async ({ params }: PageProps) => {
    
    const fetchStore = async () => {
      const storeId = params.id
      const response = await axios.get(
        "/store",
        {
            params: { id: storeId },
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        }
    )
      return response.data.message
    }

    const store = await fetchStore()

  return (
    <>
        <StoreHeader />
        <StoreFront store={store[0]} />
    </>
  )
}

export default Store