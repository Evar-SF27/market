import axios from '@/config/axios'

const fetchUserById = async (id: String) => {
    const response = await axios.get(
      "/user",
      {
          params: { id: id }
      }
  )
    var user = response.data.message

    return user
    
}
  
export { fetchUserById }