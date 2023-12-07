import axios from '@/config/axios'

const fetchProducts = async () => {
    try {
        const response = await axios.get(
            "/product",
        )

        return response.data.message
        
    } catch (err: any) {
        console.error(err.message)
    }
}

export { fetchProducts }