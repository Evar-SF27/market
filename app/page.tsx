import { Categories, Hero, NavBar, Offers, Sales } from '@/components'

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
