"use client"

import Image from 'next/image'
import Cart from '../reusables/cart'
import EditProductModal from '../modals/editProducts'
import { useContext, useState } from 'react'
import { ProductProps } from '@/types'
import { ReviewComponent } from '..'
import { useAppSelector } from '@/redux/store'
import { ProductIdContext } from '@/context/products'
import { useRouter } from 'next/navigation'

const ProductInfo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const product: ProductProps | null = useContext(ProductIdContext) 
  const userId = useAppSelector(state => state.persistedAuthReducer.value.user?.username)
  const store = useAppSelector(state => state.persistedStoreReducer.store.user)
  const router = useRouter()
  const isAdmin = store == userId

  if (product == null) {
    router.back()
  }
    
  return (
    <div className='mx-4 md:mx-6'>
        <EditProductModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        <div className='mt-4 flex flex-col md:flex-row gap-6 lg:gap-10'>
          <div className='flex flex-col gap-2 h-[600px] w-[100%] md:w-[50%]'>
            <div className='bg-secondary-500 h-[450px] p-6 w-[100%] flex'>
              <Image src='/images/i14_black.png' alt='product' width={500} height={500} className='flex items-center justify-center object-contain' />
            </div>
            <div className='flex gap-2'>
              <div className='bg-secondary-500 h-[150px] p-2 w-[150px] flex'>
                <Image src='/images/i14_black.png' alt='product' width={200} height={200} className='flex items-center justify-center object-contain' />
              </div>
              <div className='bg-secondary-500 h-[150px] p-2 w-[150px] flex'>
                <Image src='/images/i14_purple.png' alt='product' width={200} height={200} className='flex items-center justify-center object-contain' />
              </div>
              <div className='bg-secondary-500 h-[150px] p-2 w-[150px] flex'>
                <Image src='/images/i14_white.png' alt='product' width={200} height={200} className='flex items-center justify-center object-contain' />
              </div>
              <div className='bg-secondary-500 h-[150px] p-2 w-[150px] flex'>
                <Image src='/images/i14_gold.png' alt='product' width={200} height={200} className='flex items-center justify-center object-contain' />
              </div>
            </div>
          </div>
          <div className='mt-8 w-[100%] md:w-[50%]'>
            <p className="text-[20px] opacity-80">{product?.product_category.category_name}</p>
            <p className="text-primary text-[42px] -mt-2 font-bold">{product?.product_name}</p>
            <p className="-mt-1 text-[18px] text-slate-800">{product?.store.store_name}</p>
            <p className='text-[14px] mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequatur ipsam molestias labore repellat corporis perspiciatis nemo harum quod temporibus aspernatur voluptatem possimus, sed necessitatibus veniam! Nam commodi dolorum quibusdam?</p>
            <div className='mt-4'>
              <p className="text-[18px] text-green-500 font-semibold"><span className='text-black'>Status: </span>In Stock</p>
              <p className="text-[18px] text-slate-800"><span className='text-black font-semibold'>Brand: </span>{product?.brand}</p>
            </div>
            <p className="text-[30px] mt-4 mx-4 font-bold text-primary">{product?.price}</p>
            <Cart />
            {isAdmin && (
                <div className='flex gap-2 w-[100%] m-4'>
                    <button 
                        onClick={() => setIsOpen(true)}
                        className="px-6 py-4 bg-primary hover:bg-primary-900 text-white text-[16px] rounded-xl"
                    >
                        Edit
                    </button>
                    <button
                        // onClick={}
                        className="px-6 py-4 bg-primary hover:bg-primary-900 text-white text-[16px] rounded-xl"
                    >
                        Delete
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
        </div>
        <div className='my-6'>
          <p className='text-primary text-[24px] font-bold'>Product Description</p>
          <p className='text-[16px] mt-2'>{product?.description == null || product.description == '' ? 'There is no description' : product.description}</p>    
        </div>
        <ReviewComponent />
        <div className='w-[100%] my-8 mx-4'>
          <h1 className='text-primary text-[28px] mb-4 font-bold'>Related Products</h1>
          <div className='flex gap-4 overflow-x-scroll'>
            <div className='bg-secondary-500 h-[200px] p-2 w-[200px] flex'>
              <Image src='/images/i14_black.png' alt='product' width={200} height={200} className='flex items-center justify-center object-contain' />
            </div>
            <div className='bg-secondary-500 h-[200px] p-2 w-[200px] flex'>
              <Image src='/images/i14_purple.png' alt='product' width={200} height={200} className='flex items-center justify-center object-contain' />
            </div>
            <div className='bg-secondary-500 h-[200px] p-2 w-[200px] flex'>
              <Image src='/images/i14_white.png' alt='product' width={200} height={200} className='flex items-center justify-center object-contain' />
            </div>
            <div className='bg-secondary-500 h-[200px] p-2 w-[200px] flex'>
              <Image src='/images/i14_gold.png' alt='product' width={200} height={200} className='flex items-center justify-center object-contain' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductInfo
