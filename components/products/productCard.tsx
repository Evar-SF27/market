import Image from 'next/image'
import Link from 'next/link'
import { ProductProps } from '@/types'
import { HeartIcon } from '@heroicons/react/20/solid'

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Link href={`/product/${product.product_slug}`} key={product._id}>  
      <div className="w-[200px] h-[270px] border rounded-[10px] border-[#eee]">
          <div className="relative bg-secondary-500 py-6 px-2 rounded-t-[10px]">
              <div>
              <Image src="/images/laptops.png" alt={product.product_slug} width={180} height={180} />
              </div>
              <div className="absolute top-4 -right-[20px] w-[40px] aspect-square bg-primary flex items-center justify-center rounded-full">
              <p className="text-white text-[13px] font-semibold">10%</p>
              </div>
              <div className="absolute bottom-2 opacity-80 hover:opacity-100 right-2 rounded-full border p-1 border-secondary-900">
              <HeartIcon className="w-[20px] aspect-square text-secondary-900" />
              </div>
          </div>
          <div className="px-2">
              <p className="text-[12px] mt-2 opacity-50">{product.product_category.category_name}</p>
              <p className="text-slate-800 hover:text-primary text-[16px]">{product.product_name}</p>
              <p className="-mt-1 text-[13px] text-slate-800">{product.store.store_name}</p>
              <p className="text-[14px] mt-2 font-bold text-primary">{product.price}</p>
          </div>
      </div>
    </Link>
  )
}

export default ProductCard
