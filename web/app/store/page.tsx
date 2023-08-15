"use client"

import { StoreForm, StoreFront, StoreHeader } from "@/components"
import { useAppSelector } from "@/redux/store"
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid"

const Store = () => {
    const user = useAppSelector((state) => state.persistedAuthReducer.value?.user)
  return (
    <>
        <StoreHeader />
        {user?.store.length ? <StoreFront /> : <StoreForm />}
    </>
  )
}

export default Store
