import axios from '@/config/axios'

const fetchCategories = async () => {
    try {
        const response = await axios.get(
            "/category",
        )

        return response
    } catch (err: any) {
        console.error(err.message)
    }

    return null
}

const fetchCategoriesById = async (category_id: String) => {
    try {
        const response = await axios.get(
            "/category",
            {
                params: { "id": category_id }
            }
        )

        return response
    } catch (err: any) {
        console.error(err.message)
    }

    return null
}

const fetchCategoriesBySlug = async (category_slug: String) => {
    try {
        const response = await axios.get(
            "/category",
            {
                params: { "slug": category_slug }
            }
        )

        return response
    } catch (err: any) {
        console.error(err.message)
    }

    return null
}

export { fetchCategories, fetchCategoriesById, fetchCategoriesBySlug }