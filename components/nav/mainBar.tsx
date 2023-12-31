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
    <div className="max-sm:mx-2 mx-6 h-22 flex items-center justify-between">
        <div className="flex justify-between w-[77%]">
            <Link href="/">
                <div className="w-[200px] max-md:w-[120px] mr-2">
                    <Image 
                        src="/images/logo.png"
                        alt="logo"
                        width={200}
                        height={150}
                    />
                </div>
            </Link>
            <div className="flex justify-center items-center w-[75%]">
                <SearchBar otherStyles="md:block hidden ml-8 w-full" />
            </div>
        </div>
        <div className="sm:w-[300px] w-[220px] flex justify-center gap-4 mr-2">
            <div className="flex">
                <button>
                    <UserIcon className="text-black-200 icons-medium" />
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
                    0
                </div>
                <HeartIcon className="text-black-200 icons-medium" />
            </button>
            <div className="flex">
                <button className="mb-6">
                    <div className="relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary rounded-full top-[12px] left-4">
                        0
                    </div>
                    <ShoppingCartIcon className="text-black-200 icons-medium" />
                </button>
                <div className="mt-[18px] ml-[20px] hidden sm:block">
                    <p className="text-[15px]">Total</p>
                    <p className="text-[18px] font-bold">$20.0</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBar


