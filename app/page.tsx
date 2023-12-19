import { CategorySlider, Hero, NavBar, Offers, PosterOne, Products, ProtectedRoute, Sales } from '@/components'
import { fetchCategories } from '@/services/categories.services'
import { fetchProducts } from '@/services/products.services'

export default async function Home() {
  const categories = await fetchCategories()
  const products = await fetchProducts()
  
  return (
    <ProtectedRoute>
      <div className='bg-secondary-100 w-[100%]'>
        <NavBar />
        <main>
          <Hero />
          <Offers />
          <Sales />
          <CategorySlider categories={categories} />
        </main>
        <PosterOne />
        <Products products={products} />
      </div>
    </ProtectedRoute> 
  )
}
