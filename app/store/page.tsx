"use client"

import { StoreForm, StoreFront, StoreHeader } from "@/components"
import { useAppSelector } from "@/redux/store"
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid"
import { NextPage } from "next/types"

const Store = () => {
    const store = useAppSelector((state) => state.persistedAuthReducer.value?.store)

  return (
    <>
        <StoreHeader />
        {store.length ? <StoreFront /> : <StoreForm />}
    </>
  )
}

export default Store
