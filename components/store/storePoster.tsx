"use client"

import { AppDispatch, useAppSelector } from '@/redux/store'
import { PencilIcon, TrashIcon, HomeModernIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
// import { deleteStore } from '@/redux/features/authSlice'
import { StoreProps } from '@/types'
import './styles/index.css'
import { useRouter } from 'next/navigation'

const StorePoster = () => {
  const dispatch = useDispatch<AppDispatch>()
  const store = useAppSelector(state => state.persistedStoreReducer.store)
  const router = useRouter()
  const deleteStoreState = () => {}
  return (
    <div>
      <div className='w-[100%]'>
        <div className="bg-secondary-800 my-4 mx-4 h-16 flex items-center justify-between px-4">
          <div>
            <h1 className="text-[32px] text-white font-bold">My Store</h1>
          </div>
          <div>
            <HomeModernIcon className="icons-large text-white" onClick={() => router.push("/")}/>
          </div>
        </div>
      </div>
      <div className="sm:mx-4 md:flex border-b pb-8 poster mb-4 md:p-8">
        <div className="flex-2 max-sm:py-4">
          <Image 
            // src={store.photo_url}
            src="/images/discount.png"
            alt="Store Photo_URL"
            width={300}
            height={200}
            className="bg-secondary-500 rounded-[50%] max-md:mx-8 border-4 border-secondary-900"
          />
        </div>
        <div className="flex-1 sm:mx-8 mx-4">
          <h1 className="md:text-[48px] text-[38px] mb-4 font-bold text-primary ">{store.store_name}</h1>
          <div className="flex flex-col">
            <div className="flex">
              <div>
                <h3 className="text-[18px] lg:text-[22px] font-semibold">{store.user}</h3>
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
            <div className="max-sm:mt-4">
              <h1 className="font-semibold text-[20px]">Description</h1>
              <p className="text-[16px] lg:text-[18px]">{store.description}</p>
            </div>
            <div className="flex w-[250px] justify-between mt-4 sm:mx-4 max-md:mt-8">
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
    </div>
  )
}

export default StorePoster
