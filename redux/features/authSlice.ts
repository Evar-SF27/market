import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/types'

const state = {
    isAuth: false,
    user: {},
    access_token: ""
} as AuthState

export const auth = createSlice({
    name: "auth",
    initialState: state,
    reducers: {
        logOut: () => {
            return state
        },
        logIn: (state, action: PayloadAction<any>) => {
            return {
                isAuth: true,
                user: action.payload?.user,
                access_token: action.payload?.access_token
            }
        }
    }
})

export const { logIn, logOut } = auth.actions
export default auth.reducer