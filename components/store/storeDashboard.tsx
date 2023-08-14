"use client"

import { UserIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const StoreDashboard = () => {
    const [active, setActive] = useState("")
    const [searchValue, setSearchValue] = useState("")
  return (
    <div>
        <div className="bg-secondary-800 h-[80px] flex items-center justify-between px-4">
            <h1 className="flex items-center text-white font-bold mx-4 text-[26px]">Admin Dashboard</h1>
            <div className="w-[80%] flex justify-end">
                <input 
                    className="w-[65%] text-[20px] h-[50px] px-4 rounded-tl-xl rounded-bl-xl" 
                    placeholder="Search..." 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="w-[120px] text-[20px] text-white h-[50px] rounded-tr-xl rounded-br-xl bg-primary">Search</button>
            </div>  
        </div>
        <div className="flex">
            <div className="w-[30%] border-r-2">
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
            <div className="w-[70%]">
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
