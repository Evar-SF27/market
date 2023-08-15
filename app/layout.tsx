"use client"

import './globals.css'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistStore(store)}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
