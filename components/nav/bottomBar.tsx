"use client"

import React, { useState } from 'react'
import { useAppSelector } from '@/redux/store'
import { ChevronRightIcon, QueueListIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const BottomBar = () => {
    const [categoryOpen, setCategoryOpen] = useState(false)
    const user = useAppSelector(state => state.persistedAuthReducer.value.user)

  return (
    <div className="sm:mx-8 h-13 bg-secondary-500 flex border border-gray-300">
      <div className="lg:w-[30%] sm:w-[15%] w-[100%] h-[50px] sm:h-[65px] sm:mr-2 flex sm:block">
        <div className="bg-primary flex h-[100%] items-center justify-center sm:px-8 w-[25%] sm:w-[100%]">
            <QueueListIcon 
                className="icons-medium text-white" 
                onClick={() => setCategoryOpen(!categoryOpen)}
            />
            <p className="hidden lg:block text-white text-[20px] ml-4">Browse Categories</p>
        </div>
        <div className={`${!categoryOpen ? "hidden" : "flex sm:absolute w-[100%] sm:w-[27.15%] sm:opacity-90  sm:flex-col overflow-x-scroll h-[100%]"}`}>
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
      <div className="bg-secondary-500 w-[85%] lg:w-[75%] sm:flex hidden h-[65px] justify-end items-center">
        <ul className="flex">
            <li className="list-nav"><Link href="#">Home</Link></li>
            <li className="list-nav"><Link href="#">Shop</Link></li>
            {user && <li className="list-nav"><Link href="/store">My Store</Link></li>}
            <li className="list-nav"><Link href="#">Account</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default BottomBar
