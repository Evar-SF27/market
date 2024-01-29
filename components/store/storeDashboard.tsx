"use client"

import React, { useState, useEffect, useContext } from 'react'
import { ProductDashboard, Products, UserCategories } from '@/components'
import { useAppSelector } from '@/redux/store'
import { CategoryProps } from '@/types'
import { QueueListIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { ProductContext } from '@/context/products'

const StoreDashboard = () => {
    const [active, setActive] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [toggledMenu, setToggledMenu] = useState(false)
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState(useContext(ProductContext))
    const user = useAppSelector(state => state.persistedAuthReducer.value.user)
    const store = useAppSelector(state => state.persistedStoreReducer.store)
    const category = useAppSelector(state =>  state.persistedCategoryReducer.categories)
    const checkStatus = user && user.username == store.user

    useEffect(() => {
        let cat = category
        let pr = null

        searchValue != null && searchValue != '' && (
          cat = category?.filter((c: CategoryProps) => c.category_name.includes(searchValue))
        //   pr = products?.filter((p: ProductProps) => p.product_name.includes(searchValue))
        )
        setCategories(cat) 
        // setProducts(pr)
      }, [searchValue])

    const setView = (active: String) => {
        switch (active) {
            case "categories":
                return <UserCategories categories={categories} />
            case "products":
                return <ProductDashboard products={products} />
            case "add-products":
                return <p>Add Products</p>
            default:
                return <ProductDashboard products={products} />
        }
    }

  return (
    <div>
        <div className="bg-secondary-800 h-[60px] w-[100%] flex items-center justify-between px-4">
            {!toggledMenu ? 
                <QueueListIcon 
                    className="icons-medium text-white -mr-2 flex items-center sm:hidden" 
                    onClick={() => setToggledMenu(true)}
                /> : 
                <XMarkIcon 
                    className="icons-medium text-white flex items-center sm:hidden" 
                    onClick={() => setToggledMenu(false)}
                />
            }
            {checkStatus && <p className="max-sm:hidden flex items-center text-white font-bold mx-4 text-[24px]">Admin Dashboard</p>}
            <div className="w-[70%] flex justify-end">
                <input 
                    className="w-[65%] text-[16px] h-[40px] px-4 rounded-xl" 
                    placeholder="Search..." 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>  
        </div>
        <div className="flex">
            <div className={`${!toggledMenu && 'max-sm:hidden'} sm:w-[30%] lg:w-[20%] w-[50%] bg-secondary-500`}>
                <nav className="border-b-[40px] border-secondary-700">
                    <p className="store_nav" onClick={() => setActive("categories")}>Categories<span>{category.length}</span></p>
                    <p className="store_nav" onClick={() => setActive("products")}>Products<span>{products?.length}</span></p>
                    <p className="store_nav">Category Three</p>
                    <p className="store_nav">Category Four</p>
                </nav>
                <div className="border-b-[40px] border-secondary-700 px-4 py-6">
                    <h3 className="font-bold text-[20px]">Filter By Category</h3>
                    {
                        <div>
                            {category.slice(0, 5).map((c: CategoryProps) => (
                                <div className='flex gap-2 item-center'>
                                    <input type='checkbox' className='h-4 w-4' />
                                    <p className='sm:text-[18px]'>{c.category_name}</p>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <div className="border-b-[40px] border-secondary-800 px-4 py-6">
                    <h3 className="font-bold text-[20px]">Price</h3>
                    <input type="range" />
                </div>
            </div>
            <div className="w-[50%] lg:w-[80%] max-sm:w-[100%] flex justify-center">
                {setView(active)}
            </div>
        </div>
    </div>    
  )
}

export default React.memo(StoreDashboard)

