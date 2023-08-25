"use client"

import { StoreDashboard, StorePoster } from '@/components'
import { registerStore } from '@/redux/features/storeSlice'
import { AppDispatch } from '@/redux/store'
import { StoreProps } from '@/types'
import { useDispatch } from 'react-redux'

const StoreFront = ({ store }: StoreProps | any) => {
  const dispatch = useDispatch<AppDispatch>()
  const set = () => {
    dispatch(registerStore(store))
  }

  set()
  return (
    <div>
      <StorePoster store={store} />
      <StoreDashboard store={store} />
    </div>
  )
}

export default StoreFront
