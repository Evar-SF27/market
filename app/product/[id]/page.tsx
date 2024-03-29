import { MainBar, TopBar } from '@/components'
import { fetchProductBySlug } from '@/services/products.services'
import { ProductIdContext } from '@/context/products'
import ProductInfo from '@/components/products/productInfo'

interface PageProps {
  params: { id: String }
}

const ProductPage = async ({ params }: PageProps) => {
    const slug = params.id
    const product = await fetchProductBySlug(slug)

  return (
    <>
      <TopBar />
      <MainBar />
      <div className='h-[60px] bg-secondary-700'></div>
      <ProductInfo product={product} />
  </>
  )
}

export default ProductPage
