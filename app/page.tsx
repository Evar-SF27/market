import { BottomBar, Categories, CategorySideBar, Hero, NavBar, Offers, PosterOne, ProtectedRoute, Sales } from '@/components'
import { fetchCategories } from '@/services/categories'

export default async function Home() {
  const { categories } = await fetchCategories()
  return (
    <ProtectedRoute>
        <div className='bg-secondary-100'>
          <NavBar />
          <main className="sm:px-4">
            <div className="flex flex-col">
                <BottomBar />
                <Hero />
            </div>
            <Offers />
            <Sales />
            <Categories categories={categories} />
          </main>
          <PosterOne />
        </div>
    </ProtectedRoute>
    
  )
}
