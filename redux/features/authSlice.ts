import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, InitialState } from '@/types'

const state = {
    value: {
        isAuth: false,
        user: null,
        access_token: ""
    } as AuthState  
} as InitialState

export const auth = createSlice({
    name: "auth",
    initialState: state,
    reducers: {
        logOut: () => {
            return state
        },
        logIn: (state, action: PayloadAction<any>) => {
            state.value.isAuth = true
            state.value.user = action.payload.user
            state.value.access_token = action.payload.access_token
        }
    }
})

export const { logIn, logOut } = auth.actions
export default auth.reducer