import { Categories, Hero, NavBar, Offers, ProtectedRoute, Sales } from '@/components'

export default function Home() {
  return (
    <ProtectedRoute>
        <>
          <NavBar />
          <main className="sm:px-8">
            <Hero />
            <Offers />
            <Sales />
            <Categories />
          </main>
        </>
    </ProtectedRoute>
    
  )
}
