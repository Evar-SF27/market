import { BottomBar, Categories, CategorySideBar, Hero, NavBar, Offers, PosterOne, ProtectedRoute, Sales } from '@/components'
import { fetchCategories } from '@/services/categories'

export default async function Home() {
  const { categories } = await fetchCategories()
  return (
    <div className='bg-secondary-100'>
      <NavBar />
      <main>
        <div className="flex flex-col">
          <Hero />
        </div>
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
