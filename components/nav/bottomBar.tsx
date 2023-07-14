"use client"

import { ChevronRightIcon, QueueListIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React, { useState } from 'react'

const BottomBar = () => {
    const [categoryOpen, setCategoryOpen] = useState(true)
    
  return (
    <div className="sm:mx-8 mx-2 h-12 flex">
      <div className="w-[25%] h-[65px] mr-2">
        <div className="bg-primary flex h-[100%] items-center px-8">
            <QueueListIcon 
                className="icons-medium text-white" 
                onClick={() => setCategoryOpen(!categoryOpen)}
            />
            <p className="text-white text-[20px] ml-4">Browse Categories</p>
        </div>
        <div className={`${!categoryOpen && "hidden"}`}>
            <div className="side-nav__items">
                <p className="text-white text-[18px] mr-4">Category One</p>
                <ChevronRightIcon className="icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="text-white text-[18px] mr-4">Category Two</p>
                <ChevronRightIcon className="icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="text-white text-[18px] mr-4">Category Three</p>
                <ChevronRightIcon className="icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="text-white text-[18px] mr-4">Category Four</p>
                <ChevronRightIcon className="icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="text-white text-[18px] mr-4">Category Five</p>
                <ChevronRightIcon className="icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="text-white text-[18px] mr-4">Category Six</p>
                <ChevronRightIcon className="icons-medium text-white" />
            </div>
            <div className="side-nav__items">
                <p className="text-white text-[18px] mr-4">Category Seven</p>
                <ChevronRightIcon className="icons-medium text-white" />
            </div>
        </div>
      </div>
      <div className="bg-secondary-500 w-[75%] h-[65px] flex justify-end items-center">
        <ul className="flex">
            <li className="list-nav"><Link href="#">Home</Link></li>
            <li className="list-nav"><Link href="#">Shop</Link></li>
            <li className="list-nav"><Link href="#">Store</Link></li>
            <li className="list-nav"><Link href="#">Special Offers</Link></li>
            <li className="list-nav"><Link href="#">Account</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default BottomBar
