"use client"

import { useState, useEffect, Key } from 'react'
import axios from '@/config/axios' 
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
// import { registerStoreId } from '@/redux/features/authSlice'
import { CategoryProps } from '@/types'
import { setCategories } from '@/redux/features/categorySlice'

const CategoryForm = ({ setActive }: Function | any) => {
    const [selectedFile, setSelectedFile] = useState<any>("")
    const [errorMessage, setErrorMessage] = useState("")
    const [category_name, setCategory_name] = useState("")
    const [parentCategory, setParentCategory] = useState("none")

    var store = useAppSelector((state) => state.persistedStoreReducer.store._id)
    var categories = useAppSelector((state) => state.persistedCategoryReducer.categories)
    var accessToken = useAppSelector((state) => state.persistedAuthReducer.value.access_token)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0])
        }
    }

    const createCategory = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("category_name", category_name)
        formData.append("parent_category", parentCategory)
        formData.append("image", selectedFile)
        
        try {
            const response = await axios.post(
                "/category/create",
                formData,
                { 
                    headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${accessToken}` },
                    withCredentials: true
                }
            )

            if (response) {
                const allCategories = [response.data.message, ...categories]
                dispatch(setCategories(allCategories))
            }
            
        } catch (err: any) {
            if (!err?.response) {
                setErrorMessage(err.message)
            } else if (err.response?.status === 409) {
                setErrorMessage("Category already exists")
            } else {
                setErrorMessage("Create Category failed")
            }
        }
    }

    const resetError = () => {
        setErrorMessage("")
    }
  return (
    <div className="h-[100%] my-6">
        <div className="flex justify-center items-center h-[100%]">
            <div className="flex flex-col h-fit bg-white w-[100%]">
                <div>
                    <div className="flex flex-col items-center justify-center py-8">
                        <h1 className="text-primary font-bold text-[3rem] max-sm:text-[1.5rem]">MarketPlace</h1>
                        <p className="text-center">Complete the fields to create your e-commerce store</p>
                    </div>
                    <div>
                        <form onSubmit={createCategory} encType="multipart/form-data">
                            <div className="mx-8">
                                <div className={`${!errorMessage && "hidden"} bg-red-100 rounded-[5px] h-fit py-4 px-4 mb-6 text-red-500`}>
                                    <span className="text-red-600 font-bold">Error: </span>{errorMessage}
                                </div>
                                <input 
                                    placeholder="Category Name"
                                    className="input_2"
                                    type="text"
                                    onChange={(e) => setCategory_name(e.target.value)}
                                    onClick={resetError}
                                    value={category_name}
                                    name="category_name"
                                />
                                <div className="mb-4">
                                    <label htmlFor="category_name" className="mr-4 mb-4">Parent Category:</label>
                                    <select className="input_2 px-4">
                                        <option value="none">None</option>
                                        {categories.map((category: CategoryProps) => <option key={category.id as Key} value={parentCategory} onChange={() => setParentCategory(category.category_slug)}>{category.category_name}</option>)}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="category_name" className="mr-4">Category Image:</label>
                                    <input 
                                        placeholder="Choose Category Image"
                                        type="file"
                                        accept="images/"
                                        onChange={handleFileChange}
                                        onClick={resetError}
                                        name="image"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mt-8 bg-primary w-[100%] py-4 rounded-[5px] text-white text-[18px] font-semibold"
                                >
                                    Create Store
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryForm