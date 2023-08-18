"use client"

import { StoreForm, StoreFront, StoreHeader } from '@/components'
import { useAppSelector } from '@/redux/store'

const Store = () => {
    const store = useAppSelector((state) => state.persistedAuthReducer.value?.store)
    console.log(store)

  return (
    <>
        <StoreHeader />
        {store[0] ? <StoreFront /> : <StoreForm />}
    </>
  )
}

export default Store
