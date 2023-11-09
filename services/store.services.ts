import axios from '@/config/axios'
import { StoreProps } from '@/types'

const fetchStoreById = async (id: String) => {
    const response = await axios.get(
      "/store",
      {
          params: { id: id }
      }
  )
    var store = response.data.message
    store = store.filter((obj: StoreProps) => obj._id == id)
    
    return store[0]
}
  
export { fetchStoreById }