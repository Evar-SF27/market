import axios from '@/config/axios'

const fetchProducts = async () => {
    try {
        const response = await axios.get("/product")

        return response.data.message
        
    } catch (err: any) {
        console.error(err.message)
    }
}

const fetchProductByID = async (id: String) => {
    try {
        const response = await axios.get(`/product`, {
            params: { id: id }
        })

        return response.data.message[0]
        
    } catch (err: any) {
        console.error(err.message)
    }
}

const fetchProductBySlug = async (slug: String) => {
    try {
        const response = await axios.get(`/product`, 
            { params: { slug: slug } }
        )

        return response.data.message
        
    } catch (err: any) {
        console.error(err.message)
    }
}

const fetchProductByStore = async (storeId: String) => {
    try {
        const response = await axios.get(`/product`, {
            params: { store: storeId }
        })

        return response.data.message
        
    } catch (err: any) {
        console.error(err.message)
    }
}

export { fetchProducts, fetchProductByID, fetchProductBySlug, fetchProductByStore }