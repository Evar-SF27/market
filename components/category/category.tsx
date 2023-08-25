"use client"

import { setCategories } from '@/redux/features/categorySlice'
import { AppDispatch } from '@/redux/store'
import { CategoryProps } from '@/types'
import Image from 'next/image'
import { Key } from 'react'
import { useDispatch } from 'react-redux'

const Category = ({ categories }: Array<CategoryProps> | any) => {
    const dispatch = useDispatch<AppDispatch>()
    const set = () => {
        dispatch(setCategories(categories))
    }

    set()
  return (
    <div className="my-8 w-[100%]">
      <div className="w-[100%] text-primary col-flex">
        <div>
            <h1 className="font-bold text-[46px] max-sm:text-[40px]">Top Categories</h1>
        </div>
        <div className="w-[90%] flex-wrap gap-4 my-8 flex justify-around max-sm:mx-2">
            {categories.slice(0,4).map((category: CategoryProps) => {
                let key: Key = category.category_slug as Key
                return (
                    <div key={key} className="col-flex">
                        <div className="row-flex category-bg">
                            <Image 
                                src="/images/laptops.png"
                                alt="category-one"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="my-4 row-flex">
                            <h3 className="text-slate-900 font-sans text-[18px] max-sm:text-[14px] max-sm:font-semibold">{category.category_name}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Category
