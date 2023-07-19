import { Hero, NavBar } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="sm:px-8">
        <Hero />
      </main>
    </>
  )
}
