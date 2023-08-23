import axios from '@/config/axios'

const fetchStoreById = async (id: String) => {
    const response = await axios.get(
      "/store",
      {
          params: { id: id }
      }
  )
    return response.data.message
  }

  export { fetchStoreById }