import axios from '@/config/axios'
import { logIn } from '@/redux/features/authSlice'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'

const useRefreshToken = () => {
    const dispatch = useDispatch<AppDispatch>()

    const refresh = async () => {
        const response = await axios.get('/refreshToken', {
            withCredentials: true,
        })

        if(response) {
            dispatch(logIn({
                access_token: response.data.accessToken,
            }))
        }

        return response.data.accessToken
    }
  return refresh
}

export default useRefreshToken