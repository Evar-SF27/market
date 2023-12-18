import ProductCard from './productCard'


const ProductsView = async ({ products }: { products: any }) => {
  return (
    <div className="py-8 px-4">
      <div className="flex justify-center">
        <h1 className="text-[24px] text-primary font-bold">Featured Products</h1>
      </div>
      <div>
        {products.map((product: any) => <ProductCard key={product.product_slug} product={product} />)}
      </div>
    </div>
  )
}


export default ProductsView

