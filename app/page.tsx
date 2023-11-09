import { Categories, Hero, NavBar, Offers, PosterOne, ProtectedRoute, Sales } from '@/components'
import { fetchCategories } from '@/services/categories.services'

export default async function Home() {
  const { categories } = await fetchCategories()
  return (
    <ProtectedRoute>
      <div className='bg-secondary-100 w-[100%]'>
        <NavBar />
        <main>
          <Hero />
          <Offers />
          <Sales />
          <Categories categories={categories} />
        </main>
        <PosterOne />
      </div>
    </ProtectedRoute>
    
  )
}
