import { Categories, Hero, NavBar, Offers, ProtectedRoute, Sales } from '@/components'
import { fetchCategories } from '@/services/categories'

export default async function Home() {
  const { categories } = await fetchCategories()
  return (
    <ProtectedRoute>
        <>
          <NavBar />
          <main className="sm:px-8">
            <Hero />
            <Offers />
            <Sales />
            <Categories categories={categories} />
          </main>
        </>
    </ProtectedRoute>
    
  )
}
