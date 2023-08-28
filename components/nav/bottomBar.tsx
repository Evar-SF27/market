"use client"

import React, { useState } from 'react'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { ChevronRightIcon, QueueListIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { logOut } from '@/redux/features/authSlice'
import { useDispatch } from 'react-redux'

const BottomBar = () => {
    const user = useAppSelector(state => state.persistedAuthReducer.value.user)
    const store = useAppSelector(state => state.persistedAuthReducer.value.store)
    const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="flex">
      <div className="bg-secondary-500 w-[100%] sm:flex hidden h-[65px] justify-end items-center">
        <ul className="flex">
            <li className="list-nav"><Link href="#">Home</Link></li>
            <li className="list-nav"><Link href="#">Shop</Link></li>
            {user && <li className="list-nav"><Link href={store == null ? "/create_store" : `store/${store}`}>My Store</Link></li>}
            <li className="list-nav"><Link href="#">Account</Link></li>
            <li onClick={() => dispatch(logOut())}>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default BottomBar
