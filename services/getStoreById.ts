import axios from '@/config/axios'
import { useAppSelector } from '@/redux/store'

export default async function getStoreById() {
    const store = useAppSelector((state) => state.persistedAuthReducer.value.store)
    const storeId = store[0]
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