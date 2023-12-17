'use client'

import { useState } from 'react'
import { ProductProps } from '@/types'
import ProductCard from './productCard'
import AddProductModal from '../modals/addProducts'
import { useAppSelector } from '@/redux/store'

const ProductDashboard = ({ products }: { products: Array<ProductProps> | undefined }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const userId = useAppSelector(state => state.persistedAuthReducer.value.user?.username)
    const store = useAppSelector(state => state.persistedStoreReducer.store.user)
    const isAdmin = store == userId

  return (
    <div>
        <div>
            <AddProductModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        </div>
        <div className='mt-2 mb-4 flex justify-start'>
            {products ? (
                products.map((product) => <ProductCard key={product.product_slug} product={product} />)
            ) : (
                <p>There are no products linked to your store</p>
            )}
        </div>
        {isAdmin && (
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="px-6 py-4 bg-primary hover:bg-primary-900 text-white text-[16px] rounded-xl"
            >
                Add Product
            </button>
        )}
    </div>
  )
}

export default ProductDashboard
