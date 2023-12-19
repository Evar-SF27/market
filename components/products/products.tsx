import ProductCard from './productCard'

const ProductsView = async ({ products }: { products: any }) => {
  return (
    <div className="flex flex-col gap-6 py-8 px-4">
      <div className="flex justify-center">
        <h1 className="text-[42px] text-primary font-bold">Featured Products</h1>
      </div>
      <div className='flex overflow-x-scroll gap-6 m-4'>
        {products.map((product: any) => <ProductCard key={product.product_slug} product={product} />)}
      </div>
    </div>
  )
}

export default ProductsView

