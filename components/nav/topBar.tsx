"use client"

import { DropDown, SearchBar } from '..'
import { useState } from 'react'
import { HomeModernIcon, ListBulletIcon, XCircleIcon,  } from '@heroicons/react/20/solid'
import Link from 'next/link'

const topBar = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("USD")
    const [selectedLanguage, setSelectedLanguage] = useState("ENG")
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="h-11 bg-secondary-800 flex-between px-3">
        <div className="flex sm:hidden">
            <ListBulletIcon 
                className="icons-small text-white" 
                onClick={() => setIsOpen(!isOpen)}
            />
            <div className={`${isOpen ? "fixed" : "hidden"} top-0 left-0 bg-secondary-800 h-[100%] w-[55%] opacity-[95%] py-2 px-4  overflow-x-scroll`}>
                <div className="flex justify-end">
                    <XCircleIcon 
                        className="icons-small text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
                <SearchBar otherStyles="block sm:hidden w-[100%] mt-4" />
                <ul className="block py-4">
                    <li className="vertical-nav"><Link href="#">Home</Link></li>
                    <li className="vertical-nav"><Link href="#">Shop</Link></li>
                    <li className="vertical-nav"><Link href="#">Store</Link></li>
                    <li className="vertical-nav"><Link href="#">Special Offers</Link></li>
                    <li className="vertical-nav"><Link href="#">Account</Link></li>
                </ul>
            </div>
        </div>
        <div className="hidden sm:flex">
            <HomeModernIcon className="w-[18px] h-[18px] mr-2 text-white" />
            <p className="text-sm text-white">
                Up to 70% off the entire store!
            </p>
        </div>
        <div className="flex-between">
            <DropDown 
                getter={selectedCurrency}
                setter={setSelectedCurrency}
                selectedStyles="flex w-14 mx-1 text-white border-r text-sm"
                dropdownStyles="absolute right-0 z-10 mt-3 w-15 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                elementStyles="flex justify-center px-4 py-2 text-sm"
                dropdownElements={["USD", "EUR", "XAF"]}
            />
            <DropDown 
                getter={selectedLanguage}
                setter={setSelectedLanguage}
                selectedStyles="flex w-14 mx-1 text-white border-r text-sm"
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
