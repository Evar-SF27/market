"use client"

import { StoreDashboard, StorePoster } from '@/components'
import { ProductContext } from '@/context/products'
import { registerStore } from '@/redux/features/storeSlice'
import { AppDispatch } from '@/redux/store'
import { StorePageProps, StoreProps } from '@/types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const StoreFront = ({ store, products }: StorePageProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const setStore = () => {
    dispatch(registerStore(store))
  }

  useEffect(() => {
    setStore()
  }, [])

  return (
    <ProductContext.Provider value={ products }>
      <StorePoster />
      <StoreDashboard />
    </ProductContext.Provider>
  )
}

export default StoreFront


