'use client'

import ProductCard from './productCard'
import AddProductModal from '../modals/addProducts'
import { useState } from 'react'
import { ProductProps } from '@/types'
import { useAppSelector } from '@/redux/store'
import { useRouter } from 'next/navigation'

const ProductDashboard = ({ products }: { products: Array<ProductProps> | undefined }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const router = useRouter()
    const userId = useAppSelector(state => state.persistedAuthReducer.value.user?.username)
    const store = useAppSelector(state => state.persistedStoreReducer.store.user)
    const isAdmin = store == userId

  return (
    <div className='h-[100%] w-[100%] flex flex-col justify-between items-start mt-2 mx-6' >
        <AddProductModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        <div className='mb-2 flex justify-start items-start gap-6'>
            {products ? (
                products.map((product) => <ProductCard key={product.product_slug} product={product} />)
            ) : (
                <p>There are no products linked to this store</p>
            )}
        </div>
        {isAdmin && (
            <div className='flex justify-end gap-4 w-[100%] mr-4 mb-4'>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-6 py-4 bg-primary hover:bg-primary-900 text-white text-[16px] rounded-xl"
                >
                    Add Product
                </button>
                <button
                    // onClick={}
                    className="px-6 py-4 bg-primary hover:bg-primary-900 text-white text-[16px] rounded-xl"
                >
                    View Analytics
                </button>
            </div>
        )}
    </div>
  )
}

export default ProductDashboard
