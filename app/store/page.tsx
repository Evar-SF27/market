"use client"

import { useEffect } from 'react'
import { StoreFront, StoreHeader } from '@/components'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { getStoreById } from '@/services'
import { useDispatch } from 'react-redux'
import { registerStore } from '@/redux/features/storeSlice'

const Store = async () => {
    var store_info = await getStoreById()
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
      store_info == null || undefined ? router.push("/create_store") : dispatch(registerStore(store_info))
    }, [])

  return (
    <>
        <StoreHeader />
        <StoreFront />
    </>
  )
}

export default Store
