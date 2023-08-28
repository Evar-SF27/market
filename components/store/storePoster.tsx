"use client"

import { AppDispatch } from '@/redux/store'
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { deleteStore } from '@/redux/features/authSlice'
import { StoreProps } from '@/types'

const StorePoster = ({ store }: StoreProps | any) => {
  const dispatch = useDispatch<AppDispatch>()
  const deleteStoreState = () => {
    console.log("Pressed")
    dispatch(deleteStore)
    console.log("Deleted")
  }
  return (
    <div className="sm:mx-4 md:flex border-b pb-8 bg-secondary-100 mb-4 p-8">
        <div className="flex-2">
          <Image 
            src="/images/discount.png"
            alt="Store Photo_URL"
            width={300}
            height={200}
            className="bg-secondary-500 rounded-[50%] max-md:mx-8 border-4 border-secondary-900"
          />
          
        </div>
        <div className="flex-1 sm:mx-8 mx-4">
          <h1 className="md:text-[48px] text-[36px] font-bold text-primary">{store.store_name}</h1>
          <div className="flex flex-col">
          <div className="flex mx-4">
            <div>
              <h3 className="text-[18px] lg:text-[22px] font-semibold">@storeowner username</h3>
              <p className="text-[16px] lg:text-[20px]">{store.location}</p>
              <p className="text-[16px] lg:text-[20px]">{store.contact}</p>
            </div>
            <div className="pl-[20%]">
              <p className="stats"><span>00</span>Subscribers</p>
              <p className="stats"><span>00</span>Posts</p>
              <p className="stats"><span>00</span>Products</p>
              <p className="stats"><span>00</span>Transactions</p>
              <br/>
            </div>
          </div>
          <div className="mx-4">
            <h1 className="font-semibold text-[20px]">Description</h1>
            <p className="text-[16px] lg:text-[18px]">{store.description}</p>
          </div>
          <div className="flex w-[250px] justify-between mt-4 mx-8">
            <button className="flex bg-primary w-[110px] h-[50px] p-2 rounded-xl text-white justify-around items-center text-[15px]">
              <PencilIcon className="icons-x-small" />
              Edit Store
            </button>
            <button className="flex bg-primary w-[130px] h-[50px] p-2 rounded-xl text-white justify-around items-center text-[15px]" onClick={deleteStoreState} >
              <TrashIcon className="icons-x-small" />
              Delete Store
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StorePoster
