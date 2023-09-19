"use client"

import Image from 'next/image'
import { useAppSelector } from '@/redux/store'
import { CategoryProps } from '@/types'
import { Key } from 'react'
import { useRouter } from 'next/navigation'

interface PageProps {
  setActive: Function | any,
  isOpen: boolean,
  closeModal: Function 
}

const CategoryView = ({ setActive, isOpen, closeModal }: PageProps) => {
  const s = useAppSelector(state => state.persistedAuthReducer.value.user)
  const store = useAppSelector(state => state.persistedStoreReducer.store.user)
  const user = useAppSelector(state => state.persistedAuthReducer.value.user?._id)
  const router = useRouter()
  const categories = useAppSelector(state =>  state.persistedCategoryReducer.categories)
  const isAdmin = store == user
  return (
    <div className="mx-4">
      <div className="w-[100%] flex-wrap gap-2 my-8 flex justify-center max-sm:mx-2">
            {categories.map((category: CategoryProps) => {
                let key: Key = category.category_slug as Key
                return (
                    <div key={key} className="col-flex-v">
                        <div 
                        onClick={() => router.push('/')}
                          className="row-flex category-bg-v">
                            <Image 
                                src="/images/laptops.png"
                                alt={`${category.category_slug}`}
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className="my-2 flex justify-center items-center">
                            <h3 className="text-primary font-sans text-[18px] max-sm:text-[14px] font-bold">{category.category_name}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
      {isAdmin && <button 
        onClick={() => closeModal(!isOpen)}
        className="px-6 py-4 bg-primary hover:bg-primary-900 text-white text-[16px] rounded-xl">Add Category</button>}
    </div>
  )
}

export default CategoryView
