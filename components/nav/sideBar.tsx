"use client"

import { ChevronRightIcon, QueueListIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const CategorySideBar = () => {
    const [categoryOpen, setCategoryOpen] = useState(true)
  return (
    <div className="w-[100%] h-[65px] mr-2 hidden md:block">
        <div className="bg-primary flex h-[100%] items-center justify-center sm:px-8 w-[100%]">
            <QueueListIcon 
                className="icons-medium text-white" 
                onClick={() => setCategoryOpen(!categoryOpen)}
            />
            <p className="text-white text-[20px] ml-4">Browse Categories</p>
        </div>
        <div className={`${!categoryOpen ? "hidden" : "flex w-[100%] mt-1 flex-col overflow-x-scroll"}`}>
            <div className="side-nav__items">
                <p className="side-nav__p">Category One</p>
                <ChevronRightIcon className="hidden sm:block icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="side-nav__p">Category Two</p>
                <ChevronRightIcon className="hidden sm:block icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="side-nav__p">Category Three</p>
                <ChevronRightIcon className="hidden sm:block icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="side-nav__p">Category Four</p>
                <ChevronRightIcon className="hidden sm:block icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="side-nav__p">Category Five</p>
                <ChevronRightIcon className="hidden sm:block icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="side-nav__p">Category Six</p>
                <ChevronRightIcon className="hidden sm:block icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="side-nav__p">Category Seven</p>
                <ChevronRightIcon className="hidden sm:block icons-medium text-white" />
            </div>
        </div>
      </div>
  )
}

export default CategorySideBar
