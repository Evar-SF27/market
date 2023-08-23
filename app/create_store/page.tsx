"use client"

import { StoreForm, StoreFront, StoreHeader } from '@/components'
import { useAppSelector } from '@/redux/store'

const CreateStore = () => {
    const store = useAppSelector((state) => state.persistedAuthReducer.value?.store)
    console.log(store)

  return (
    <StoreForm />
  )
}

export default CreateStore