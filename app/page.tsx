import { BottomBar, Categories, CategorySideBar, Hero, NavBar, Offers, PosterOne, ProtectedRoute, Sales } from '@/components'
import { fetchCategories } from '@/services/categories'

export default async function Home() {
  const { categories } = await fetchCategories()
  return (
    <ProtectedRoute>
        <>
          <NavBar />
          <main className="sm:px-4">
            <div className="w-full flex justify-between">
              <div className="w-[25%] mr-1 max-md:hidden">
                <CategorySideBar categories={categories && categories.slice(0,10)} />
              </div>
              <div className="w-[75%] max-md:w-[100%]">
                <BottomBar />
                <Hero />
              </div>
            </div>
            <Offers />
            <Sales />
            <Categories categories={categories} />
          </main>
          <PosterOne />
        </>
    </ProtectedRoute>
    
  )
}
