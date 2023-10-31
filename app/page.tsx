import { Categories, Hero, NavBar, Offers, PosterOne, ProtectedRoute, Sales } from '@/components'
import { fetchCategories } from '@/services/categories'

export default async function Home() {
  const { categories } = await fetchCategories()
  return (
    <div className='bg-secondary-100 w-full'>
      <NavBar />
      <main>
        <Hero />
        <Offers />
        <Sales />
        <Categories categories={categories} />
      </main>
      <PosterOne />
    </div>
    // <ProtectedRoute>
    // </ProtectedRoute>
    
  )
}
