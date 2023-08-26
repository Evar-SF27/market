"use client"

import { useState, useEffect } from 'react'
import axios from '@/config/axios' 
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { registerStoreId } from '@/redux/features/authSlice'

const CategoryForm = ({ setSActive }: Function | any) => {
    const [errorMessage, setErrorMessage] = useState("")
    const [category_name, setCategory_name] = useState("")
    const [photo, setPhoto] = useState("")

    var store = useAppSelector((state) => state.persistedStoreReducer.store.id)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    useEffect(() => {
        store != null && router.push(`/store/${store}`)
    }, [])

    const createStore = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const values = {
            "category_name": category_name,
            "slug": category_name.toLowerCase().split(" ").join("_"),
            "image": photo
        }
        try {
            const response = await axios.post(
                "/store/create",
                values,
                { 
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            )

            if (response) {
                dispatch(registerStoreId({ store: response.data.store._id }))
                router.push(`/store/${response.data.store._id}`)
            }
        } catch (err: any) {
            if (!err?.response) {
                setErrorMessage(err.message)
            } else if (err.response?.status === 409) {
                setErrorMessage("Store already exists")
            } else {
                setErrorMessage("Cannot create store")
            }
        }
    }

    const resetError = () => {
        setErrorMessage("")
    }
  return (
    <div className="flex h-[100vh]">
        <div className="flex-1 h-[100%] bg-primary max-lg:hidden">
        </div>
        <div className="flex-1 flex justify-center items-center h-[100%]">
            <div className="flex flex-col h-[650px] bg-white max-lg:w-[70%] max-md:w-[90%] w-[90%]">
                
                <div>
                    <div className="flex flex-col items-center justify-center py-8">
                        <h1 className="text-primary font-bold text-[3rem] max-sm:text-[2.5rem]">Market Place Store</h1>
                        <p className="text-center">Complete the fields to create your e-commerce store</p>
                    </div>
                    <div>
                        <form onSubmit={createStore} encType="multipart/form-data">
                            <div className="mx-8">
                                <div className={`${!errorMessage && "hidden"} bg-red-100 rounded-[5px] h-fit py-4 px-4 mb-6 text-red-500`}>
                                    <span className="text-red-600 font-bold">Error: </span>{errorMessage}
                                </div>
                                <input 
                                    placeholder="Store Name"
                                    className="input_2"
                                    type="text"
                                    onChange={(e) => setCategory_name(e.target.value)}
                                    onClick={resetError}
                                    value={category_name}
                                    name="category_name"
                                />
                                <div className="mb-4">
                                    <label htmlFor="store_poster" className="mr-4">Store Poster:</label>
                                    <input 
                                        placeholder="Choose Store Poster"
                                        type="file"
                                        onChange={(e) => setPhoto(e.target.value)}
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