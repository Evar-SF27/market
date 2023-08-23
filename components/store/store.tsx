"use client"

import { StoreDashboard, StorePoster } from '@/components'
import { setCategories } from '@/redux/features/categorySlice'
import { AppDispatch } from '@/redux/store'
import { StorePageProps } from '@/types'
import { useDispatch } from 'react-redux'

const StoreFront = ({ props }: StorePageProps | any) => {
  console.log("categories", props.categories)
  // const dispatch = useDispatch<AppDispatch>()
  // dispatch(setCategories(categories))
  return (
    <div>
      <StorePoster store={props.store} />
      <StoreDashboard store={props.store} />
    </div>
  )
}

export default StoreFront
