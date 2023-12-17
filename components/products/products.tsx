import { HeartIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import Link from "next/link"
import ProductCard from "./productCard"


const ProductsView = async ({ products }: { products: any }) => {
  return (
    <div className="py-8 px-4">
      <div className="flex justify-center">
        <h1 className="text-[24px] text-primary font-bold">Featured Products</h1>
      </div>
      <div>
        {products.map((product: any) => <ProductCard product={product} />)}
      </div>
    </div>
  )
}


export default ProductsView

