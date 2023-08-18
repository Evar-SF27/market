import axios from '@/config/axios'
import { InitialStoreState } from '@/types'
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const storeAdapter = createEntityAdapter()

const fetchStoreById = createAsyncThunk(
    'store/fetchStore',
    async (storeId: String) => {
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
  )

const state = {
    store: {},
    status: 'idle'
} as InitialStoreState

const storeSlice = createSlice({
    name: "Store",
    initialState: state,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchStoreById.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchStoreById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.store = action.payload
            })
            .addCase(fetchStoreById.rejected, (state, action) => {
                state.status = 'failed'
            })
        }
})

export const {} = storeSlice.actions
export default storeSlice.reducer
