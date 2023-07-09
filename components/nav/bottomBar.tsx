import { ChevronDoubleRightIcon, QueueListIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

const BottomBar = () => {
  return (
    <div className="sm:mx-8 mx-2 h-12 flex">
      <div className="w-[25%] h-[48px] mr-2">
        <div className="bg-primary flex h-[100%] items-center justify-center">
            <QueueListIcon className="icons-medium text-white" />
            <p className="text-white text-[20px] ml-4">Browse Categories</p>
        </div>
            <div className="bg-secondary-500 border-b border-white h-[60px] flex items-center justify-between px-16">
                <p className="text-white text-[18px] mr-4">Category One</p>
                <ChevronDoubleRightIcon className="icons-medium text-white" />
            </div>
            <div className="bg-secondary-500 border-b border-white h-[60px] flex items-center justify-between px-16">
                <p className="text-white text-[18px] mr-4">Category Two</p>
                <ChevronDoubleRightIcon className="icons-medium text-white" />
            </div>
            <div className="bg-secondary-500 border-b border-white h-[60px] flex items-center justify-between px-16">
                <p className="text-white text-[18px] mr-4">Category Three</p>
                <ChevronDoubleRightIcon className="icons-medium text-white" />
            </div>
            <div className="bg-secondary-500 border-b border-white h-[60px] flex items-center justify-between px-16">
                <p className="text-white text-[18px] mr-4">Category Four</p>
                <ChevronDoubleRightIcon className="icons-medium text-white" />
            </div>
            <div className="bg-secondary-500 border-b border-white h-[60px] flex items-center justify-between px-16">
                <p className="text-white text-[18px] mr-4">Category Five</p>
                <ChevronDoubleRightIcon className="icons-medium text-white" />
            </div>
            <div className="bg-secondary-500 border-b border-white h-[60px] flex items-center justify-between px-16">
                <p className="text-white text-[18px] mr-4">Category Six</p>
                <ChevronDoubleRightIcon className="icons-medium text-white" />
            </div>
            <div className="bg-secondary-500 border-b border-white h-[60px] flex items-center justify-between px-16">
                <p className="text-white text-[18px] mr-4">Category Seven</p>
                <ChevronDoubleRightIcon className="icons-medium text-white" />
            </div>
      </div>
      <div className="bg-secondary-500 w-[75%] flex justify-end items-center">
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
