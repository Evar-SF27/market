"use client"

import './globals.css'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

// export const metadata: Metadata = {
//   title: 'Market',
//   description: 'An Ecommerce web application',
// }

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
