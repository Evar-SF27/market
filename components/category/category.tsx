"use client"

import Image from 'next/image'
import { setCategories } from '@/redux/features/categorySlice'
import { AppDispatch } from '@/redux/store'
import { CategoryProps } from '@/types'
import { Key, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CategoryCard } from '..'

const Category = ({ categories }: Array<CategoryProps> | any) => {
    const dispatch = useDispatch<AppDispatch>()
    const setCategoriesToStore = () => {
        dispatch(setCategories(categories))
    }
    useEffect(() => {
        setCategoriesToStore()
    }, [categories])
    
  return (
    <div className="my-8 w-[100%]">
      <div className="w-[100%] text-primary col-flex">
        <div>
            <h1 className="font-bold text-[46px] max-sm:text-[40px]">Top Categories</h1>
        </div>
        <div className="w-[90%] flex-wrap gap-4 my-8 flex justify-around max-sm:mx-2">
            {categories && categories.slice(0,4).map((category: CategoryProps) => {
                let key: Key = category.category_slug as Key
                return <CategoryCard key={key} category_name={category.category_name} category_slug={category.category_slug} photo_url={category.photo_url} />
            })}
        </div>
      </div>
    </div>
  )
}

export default Category
