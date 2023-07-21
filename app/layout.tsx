import dbConnect from '@/config/dbConfig'
import type { Metadata } from 'next'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'

export const metadata: Metadata = {
  title: 'Market',
  description: 'An Ecommerce web application',
}

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  dbConnect()
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
