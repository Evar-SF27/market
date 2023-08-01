"use client"

import { HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/20/solid'
import { SearchBar } from '..'
import { useAppSelector } from '@/redux/store'
import Image from 'next/image'
import Link from 'next/link'

const MainBar = () => {
    const isAuth = useAppSelector((state) => state.persistedAuthReducer.value.isAuth)
    const access_token = useAppSelector((state) => state.persistedAuthReducer.value.access_token)
    const user = useAppSelector((state) => state.persistedAuthReducer.value.user)

  return (
    <div className="max-sm:mx-2 mx-12 h-20 flex items-center justify-between">
        <div className="flex justify-between w-[70%]">
            <div className="w-[200px] max-sm:w-[90px] mr-2">
                {/* <h1 className="max-sm:text-[28px] text-[35px] sm:ml-0 ml-4 font-semibold h-[55px] flex items-center">
                    MarketPlace
                </h1> */}
                <Image 
                    src="/images/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-[250px] h-[90%]"
                />
            </div>
            <div className="flex justify-center w-[100%]">
                <SearchBar otherStyles="sm:block hidden ml-8 w-[100%]" />
            </div>
        </div>
        <div className="sm:w-[270px] w-[250px] flex justify-around mr-2">
            <div className="flex">
                <button>
                    <UserIcon className="text-secondary-900 icons-medium" />
                </button>
                <div className="mt-[20px] max-w-[400px]:hidden">
                    <p className="text-sm">Hello</p>
                    {isAuth ? (
                        <p className="text-sm font-bold">{user && user?.username.length > 5 ? user?.username : user?.username.slice(0, 5) + "..."}</p>
                    ) : (
                        <Link href={`/signin`} className="text-sm font-bold">Sign In</Link>
                    )}
                    
                </div>
            </div>
            <button className="mb-6">
                <div className="relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary rounded-full top-[12px] left-4">
                    20
                </div>
                <HeartIcon className="text-secondary-900 icons-medium" />
            </button>
            <div className="flex">
                <button className="mb-6">
                    <div className="relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary rounded-full top-[12px] left-4">
                        20
                    </div>
                    <ShoppingCartIcon className="text-secondary-900 icons-medium" />
                </button>
                <div className="mt-[18px] ml-[15px] hidden sm:block">
                    <p className="text-[15px]">Total</p>
                    <p className="text-[18px] font-bold">$20.0</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBar


