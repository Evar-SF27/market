'use client'

import { HeartIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const Cart = () => {
    const [quantity, setQuantity] = useState(0)
    const [isAddedToWishlist, setIsAddedToWishList] = useState(false)
  return (
    <div className='flex gap-4 mt-4 mx-4'>
        <div className='border flex h-[40px] w-[100px]'>
            <div className='flex w-[100%]'>
                <div className='border-r w-[30%] col-flex bg-secondary-700' onClick={() => quantity > 0 && setQuantity(quantity - 1)}>-</div>
                <div className='w-[60%] col-flex'>{quantity}</div>
                <div className='border-l w-[30%] col-flex bg-secondary-700' onClick={() => setQuantity(quantity + 1)}>+</div>
            </div>
        </div>
        <div className='flex gap-2'>
          <button className='bg-primary text-white rounded-[10px] px-4 py-2'>Add to Cart</button>
          {isAddedToWishlist ? (
            <button className='bg-primary w-[40px] aspect-square rounded-full flex justify-center items-center' onClick={() => setIsAddedToWishList(false)}>
              <HeartIcon className='w-6 h-6 text-white' />
            </button>
          ) : (
            <button className='bg-secondary-800 w-[40px] aspect-square rounded-full flex justify-center items-center' onClick={() => setIsAddedToWishList(true)}>
              <HeartIcon className='w-6 h-6 text-white' />
            </button>
          )}
        </div>
    </div>
    
  )
}

export default Cart
