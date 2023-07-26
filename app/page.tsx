import { Categories, Hero, NavBar, Offers, Sales } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="sm:px-8">
        <Hero />
        <Offers />
        <Sales />
        <Categories />
      </main>
    </>
  )
}
