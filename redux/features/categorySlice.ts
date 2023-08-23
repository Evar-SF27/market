import { createSlice } from '@reduxjs/toolkit'

const state = {
    categories: []
}

export const categorySlice = createSlice({
    name: "category",
    initialState: state, 
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        }
    }
})

export const { setCategories } = categorySlice.actions
export default categorySlice.reducer