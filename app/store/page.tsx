"use client"

import { StoreForm, StoreFront, TopBar } from "@/components"
import { useAppSelector } from "@/redux/store"
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid"

const Store = () => {
    const user = useAppSelector((state) => state.persistedAuthReducer.value?.user)
  return (
    <>
        <TopBar />
        {user?.store.length ? <StoreFront /> : <StoreForm />}
        <StoreForm />
    </>
  )
}

export default Store
