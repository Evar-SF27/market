import Image from "next/image"


const ProductsView = async ({ products }: { products: any }) => {
  return (
    <div className="py-8 px-4">
      <div className="flex justify-center">
        <h1 className="text-[24px] text-primary font-bold">Featured Products</h1>
      </div>
      <div>
        {products.map((product: any) => (
            <div key={product._id} className="w-[180px]">
              <div className="relative">
                <Image src="/images/laptops.png" alt={product.product_slug} width={175} height={175} />
                <div className="absolute bg-primary top-0 right-2 rounded-full">
                  <p className="text-white p-2 text-[13px] font-semibold">10%</p>
                </div>
              </div>
              <p className="text-primary hover:text-primary-900 text-[18px] font-semibold mt-2">{product.product_name}</p>
              <p className="text-[14px]">{product.product_category.category_name}</p>
              <p className="text-[14px]">{product.store.store_name}</p>
              <p className="text-[14px] mt-2 font-bold">{product.price}</p>
            </div>
          ))}
      </div>
    </div>
  )
}


export default ProductsView
