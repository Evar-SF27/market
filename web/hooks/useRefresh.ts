import axios from '@/config/axios'

const useRefreshToken = () => {

    const refresh = async () => {
        const response = await axios.get('/refreshToken', {
            withCredentials: true,
        })
        // setAuth(prev => {
        //     return {
        //          ...prev, 
        //          roles: response.data.roles,
        //          accessToken: response.data.accessToken 
        //         }
        // })

        return response.data.accessToken
    }
  return refresh
}

export default useRefreshToken