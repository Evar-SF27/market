"use client"

import { UserCategories } from '@/components'
import { QueueListIcon, XMarkIcon } from '@heroicons/react/20/solid'
import React, { useState, } from 'react'

const StoreDashboard = () => {
    const [active, setActive] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [toggledMenu, setToggledMenu] = useState(false)
  return (
    <div>
        <div className="bg-secondary-800 h-[60px] flex items-center justify-between px-4">
            <h1 className="max-sm:hidden flex items-center text-white font-bold mx-4 text-[26px]">Admin Dashboard</h1>
            {!toggledMenu ? 
                <QueueListIcon 
                    className="icons-medium text-white" 
                    onClick={() => setToggledMenu(true)}
                /> : 
                <XMarkIcon 
                    className="icons-medium text-white" 
                    onClick={() => setToggledMenu(false)}
                />}
            <div className="w-[80%] flex justify-end">
                <input 
                    className="w-[65%] text-[16px] h-[40px] px-4 rounded-tl-xl rounded-bl-xl" 
                    placeholder="Search..." 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="w-[80px] text-[16px] text-white h-[40px] rounded-tr-xl rounded-br-xl bg-primary">Search</button>
            </div>  
        </div>
        <div className="flex">
            <div className={`${!toggledMenu && 'hidden'} sm:w-[30%] w-[50%] border-r-2`}>
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
                    ? <UserCategories />
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

export default React.memo(StoreDashboard)
