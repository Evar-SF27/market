import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { config } from '@/config/reduxPersist'
import authReducer from '@/redux/features/authSlice'
import storeReducer from '@/redux/features/storeSlice'
import categoryReducer from '@/redux/features/categorySlice'

const persistedAuthReducer = persistReducer(config, authReducer)
const persistedStoreReducer = persistReducer(config, storeReducer)

export const store = configureStore({
    reducer: {
        persistedAuthReducer,
        persistedStoreReducer,
        categoryReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector