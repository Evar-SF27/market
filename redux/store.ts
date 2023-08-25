import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import authReducer from '@/redux/features/authSlice'
import storeReducer from '@/redux/features/storeSlice'
import categoryReducer from '@/redux/features/categorySlice'
import { config } from '@/config/reduxPersist'

const persistedAuthReducer = persistReducer(config, authReducer)
const persistedStoreReducer = persistReducer(config, storeReducer)
const persistedCategoryReducer = persistReducer(config, categoryReducer)

export const store = configureStore({
    reducer: {
        persistedAuthReducer,
        persistedStoreReducer,
        persistedCategoryReducer
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