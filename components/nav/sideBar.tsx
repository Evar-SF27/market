"use client"

import { CategoryProps } from '@/types'
import { ChevronRightIcon, QueueListIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const CategorySideBar = ({ categories }: Array<CategoryProps> | any) => {
    const [categoryOpen, setCategoryOpen] = useState(true)
  return (
    <div className="w-[100%] h-[65px] mr-2 hidden md:block">
        <div className="bg-primary flex h-[100%] items-center justify-start sm:px-8 w-[100%]">
            <QueueListIcon 
                className="icons-medium text-white" 
                onClick={() => setCategoryOpen(!categoryOpen)}
            />
            <p className="text-white text-[20px] font-semibold ml-4">Browse Categories</p>
        </div>
        <div className={`${!categoryOpen ? "hidden" : "flex w-[100%] mt-[2px] flex-col overflow-x-scroll"}`}>
            {categories.map((category: CategoryProps) => (
                <div className="side-nav__items">
                    <p className="side-nav__p">{category.category_name}</p>
                    <ChevronRightIcon className="hidden sm:block icons-medium text-white" />
                </div>
            ))}
        </div>
      </div>
  )
}

export default CategorySideBar
