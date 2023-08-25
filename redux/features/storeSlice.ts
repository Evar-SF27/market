import { InitialStoreState } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const state = {
    store: {},
    status: 'idle'
} as InitialStoreState

const storeSlice = createSlice({
    name: "Store",
    initialState: state,
    reducers: {
        registerStore: (state, action: PayloadAction<any>) => {
            state.store = action.payload
        }
    }
})

export const { registerStore } = storeSlice.actions
export default storeSlice.reducer
