import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, InitialState } from '@/types'

const state = {
    value: {
        isAuth: false,
        user: null,
        access_token: "",
        store: null
    } as AuthState  
} as InitialState

export const auth = createSlice({
    name: "auth",
    initialState: state,
    reducers: {
        logOut: (state) => {
            return state
        },
        logIn: (state, action: PayloadAction<any>) => {
            state.value.isAuth = true
            state.value.user = action.payload.user
            state.value.access_token = action.payload.access_token
            state.value.store = action.payload.store
        },
        registerUserStore: (state, action: PayloadAction<any>) => {
            state.value.store = action.payload.store    
        },
        deleteUserStore: (state) => {
            state.value.store = null
        },
    }
})

export const { logIn, logOut, registerUserStore, deleteUserStore } = auth.actions
export default auth.reducer