"use client"

import Image from 'next/image'
import { useAppSelector } from '@/redux/store'
import { CategoryProps } from '@/types'
import { Key, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AddCategoryModal, CategoryCard } from '..'

interface PageProps {
  categories: Array<CategoryProps>
}

const CategoryView = ({ categories }: PageProps) => {
  const [showForm, setShowForm] = useState(false)
  const s = useAppSelector(state => state.persistedAuthReducer.value.user)
  const store = useAppSelector(state => state.persistedStoreReducer.store.user)
  const userId = useAppSelector(state => state.persistedAuthReducer.value.user?.username)
  const router = useRouter()
  const isAdmin = store == userId

  return (
    <div className="mx-4">
      <AddCategoryModal isOpen={showForm} closeModal={() => setShowForm(false)} />
      <div className="w-[100%] flex-wrap gap-2 my-8 flex justify-center max-sm:mx-2">
            {categories.map((category: CategoryProps) => {
                let key: Key = category.category_slug as Key
                return <CategoryCard key={key} category_name={category.category_name} category_slug={category.category_slug} photo_url={category.photo_url} />
            })}
        </div>
      {isAdmin && (
        <button 
        onClick={() => setShowForm(!showForm)}
        className="px-6 py-4 bg-primary hover:bg-primary-900 text-white text-[16px] rounded-xl">Add Category</button>
      )}
    </div>
  )
}

export default CategoryView


