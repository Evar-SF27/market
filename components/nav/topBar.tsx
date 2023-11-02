"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DropDown, SearchBar } from '..'
import { HomeModernIcon, ListBulletIcon, XCircleIcon,  } from '@heroicons/react/20/solid'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { logOut } from '@/redux/features/authSlice'

const topBar = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("USD")
    const [selectedLanguage, setSelectedLanguage] = useState("ENG")
    const [showAccountOptions, setShowAccountOptions] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const user = useAppSelector((state) => state.persistedAuthReducer.value.user)
    const store = useAppSelector(state => state.persistedAuthReducer.value.store)
    const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="h-11 bg-secondary-800 flex-between px-3 text-white">
        <div className="flex sm:hidden">
            <ListBulletIcon 
                className="icons-small" 
                onClick={() => setIsOpen(!isOpen)}
            />
            <div className={`${isOpen ? "fixed" : "hidden"} top-0 left-0 bg-secondary-800 h-[100%] w-[55%] opacity-[95%] py-2 px-4  overflow-x-scroll`}>
                <div className="flex justify-end">
                    <XCircleIcon 
                        className="icons-small"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
                <SearchBar otherStyles="block sm:hidden w-[100%] mt-4" />
                <ul className="block py-4">
                    <li className="vertical-nav"><Link href="#">Shop</Link></li>
                    {user && <li className="vertical-nav"><Link href="/create_store">My Store</Link></li>}
                    <li className="vertical-nav"><Link href="#">Account</Link></li>
                </ul>
            </div>
        </div>
        <div className="hidden sm:flex">
            <HomeModernIcon className="w-[18px] h-[18px] mr-2" />
            <p className="text-sm text-white">
                Download the MarketSpace App
            </p>
        </div>
        <div className="flex-between">
        <div className="flex">
            <div className="sm:flex hidden pr-2 justify-end items-center">
                <ul className="flex">
                    <li className="list-nav"><Link href="#">Shop</Link></li>
                    {user && <li className="list-nav"><Link href={store == null ? "/create_store" : `store/${store}`}>My Store</Link></li>}
                    <li className="list-nav relative" onClick={() => setShowAccountOptions(!showAccountOptions)}>Account</li>
                    <div className={`${!showAccountOptions && 'hidden'} absolute top-11 ml-14 z-20 w-[100px]`}>
                        <div className='flex flex-col gap-2 bg-secondary-700 border-b-4 border-secondary-900 px-2'>
                            <li className="list-nav-dropdown"><Link href="#">Store</Link></li>
                            <li className="list-nav-dropdown"><Link href="#">Profile</Link></li>
                            <li className="flex justify-center p-2 text-sm text-white h-fit"><Link href="#">Log Out</Link></li>
                        </div>
                    </div>
                    {/* <li onClick={() => dispatch(logOut())}>Logout</li> */}
                </ul>
            </div>
            </div>
            <DropDown 
                getter={selectedCurrency}
                setter={setSelectedCurrency}
                selectedStyles="flex w-14 mx-1 border-r text-sm"
                dropdownStyles="absolute right-0 z-10 mt-3 w-15 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                elementStyles="flex justify-center px-4 py-2 text-sm"
                dropdownElements={["USD", "EUR", "XAF"]}
            />
            <DropDown 
                getter={selectedLanguage}
                setter={setSelectedLanguage}
                selectedStyles="flex w-14 mx-1 border-r text-sm"
                dropdownStyles="absolute right-0 z-10 mt-3 w-15 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                elementStyles="flex justify-center px-4 py-2 text-sm"
                dropdownElements={["ENG", "FRE", "POR"]}
            />
            <a href="#" className="ml-2 text-sm text-white hidden sm:block">Become an Affiliate</a>
        </div>
    </div>
  )
}

export default topBar
