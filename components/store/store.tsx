"use client"

import { StoreDashboard, StorePoster } from '@/components'
import { registerStore } from '@/redux/features/storeSlice'
import { AppDispatch } from '@/redux/store'
import { StoreProps } from '@/types'
import { useDispatch } from 'react-redux'

const StoreFront = ({ store }: StoreProps | any) => {
  const dispatch = useDispatch<AppDispatch>()
  const setStore = () => {
    dispatch(registerStore(store))
  }

  setStore()
  return (
    <div>
      <StorePoster />
      <StoreDashboard />
    </div>
  )
}

export default StoreFront
