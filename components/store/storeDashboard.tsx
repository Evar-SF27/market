"use client"

import { UserIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const StoreDashboard = () => {
    const [active, setActive] = useState("")
  return (
    <div>
        <div className="bg-secondary-800 h-[50px] flex">
            <h1 className="flex items-center text-white font-bold mx-4 text-[18px]"><span><UserIcon className="icons-small mr-2" /></span>Admin Panel</h1>
        </div>
        <div className="flex">
            <div className="w-[25%] border-r-2">
                <nav className="border-b-[40px] border-secondary-800">
                    <p className="store_nav" onClick={() => setActive("categories")}>Categories<span>0</span></p>
                    <p className="store_nav" onClick={() => setActive("products")}>Products<span>0</span></p>
                    <p className="store_nav">Category Three</p>
                    <p className="store_nav">Category Four</p>
                </nav>
                <div className="border-b-[40px] border-secondary-800 px-4 py-6">
                    <h3 className="font-bold text-[20px]">Filter By Category</h3>
                    <div>
                        <input type="checkbox" />
                        <p>Category one</p>   
                    </div>
                </div>
                <div className="border-b-[40px] border-secondary-800 px-4 py-6">
                    <h3 className="font-bold text-[20px]">Price</h3>
                    <input type="range" />
                </div>
            </div>
            <div className="w-[75%]">
                {
                    active == "categories" 
                    ? <p>Categories</p>
                    : (
                        active == 'products' 
                        ? <p>Products</p>
                        : <p>Others</p>
                    )
                }
            </div>
        </div>
    </div>    
  )
}

export default StoreDashboard
