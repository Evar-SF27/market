import axios from '@/config/axios'
import { InitialStoreState } from '@/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchStoreById = createAsyncThunk(
    'store/fetchStore',
    async (userId: number, thunkAPI) => {
      const response = await axios.get()
      return response.data
    }
  )

const state = {
    store: {},
    loading: 'idle'
} as InitialStoreState

const storeSlice = createSlice({
    name: "Store",
    initialState: state,
    reducers: {},
    // extraReducers: 
})