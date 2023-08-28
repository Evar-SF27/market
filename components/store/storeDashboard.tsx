"use client"

import { AddCategoryModal, CategoryForm, UserCategories } from '@/components'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { QueueListIcon, XMarkIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const StoreDashboard = () => {
    const [active, setActive] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [toggledMenu, setToggledMenu] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const user = useAppSelector(state => state.persistedAuthReducer.value.user)
    const store = useAppSelector(state => state.persistedStoreReducer.store)
    const dispatch = useDispatch<AppDispatch>()
    const checkStatus = user && user._id == store.user


    const setView = (active: String) => {
        switch (active) {
            case "categories":
                return <UserCategories setActive={setActive} isOpen={showForm} closeModal={setShowForm} />
            case "add-categories":
                return <CategoryForm setActive={setActive} />
            case "products":
                return <p>Products</p>
            case "add-products":
                return <p>Add Products</p>
            default:
                return <p>Products</p>
        }
    }
    

  return (

    <div>
        <AddCategoryModal isOpen={showForm} closeModal={() => setShowForm(false)} />
        <div className="bg-secondary-800 h-[60px] flex items-center justify-between px-4">
            {!toggledMenu ? 
                <QueueListIcon 
                    className="icons-medium text-white -mr-2 flex items-center sm:hidden" 
                    onClick={() => setToggledMenu(true)}
                /> : 
                <XMarkIcon 
                    className="icons-medium text-white flex items-center sm:hidden" 
                    onClick={() => setToggledMenu(false)}
                />}
                {checkStatus && <p className="max-sm:hidden flex items-center text-white font-bold mx-4 text-[20px]">Admin Dashboard</p>}
            <div className="w-[70%] flex justify-end">
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
            <div className={`${!toggledMenu && 'max-sm:hidden'} sm:w-[30%] w-[50%] border-r-2`}>
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
                {setView(active)}
            </div>
        </div>
    </div>    
  )
}

export default React.memo(StoreDashboard)

