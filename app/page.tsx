import { BottomBar, Categories, CategorySideBar, Hero, NavBar, Offers, ProtectedRoute, Sales } from '@/components'
import { fetchCategories } from '@/services/categories'

export default async function Home() {
  const { categories } = await fetchCategories()
  return (
    <ProtectedRoute>
        <>
          <NavBar />
          <main className="sm:px-4">
            <div className="w-[100%] flex justify-between">
              <div className="w-[23%] mr-1 max-md:hidden">
                <CategorySideBar />
              </div>
              <div className="w-[77%] max-md:w-[100%]">
                <BottomBar />
                <Hero />
              </div>
            </div>
            <Offers />
            <Sales />
            <Categories categories={categories} />
          </main>
        </>
    </ProtectedRoute>
    
  )
}
