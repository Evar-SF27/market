import { NavBar } from '@/components'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Market',
  description: 'An Ecommerce web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
