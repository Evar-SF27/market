"use client"

import { useState, useEffect } from 'react'
import axios from '@/config/axios' 
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { registerUserStore } from '@/redux/features/authSlice'

const StoreForm = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [store_name, setStore_name] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [contact, setContact] = useState("")
    const [selectedFile, setSelectedFile] = useState<File | null>()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0])
        }
    }

    const user = useAppSelector((state) => state.persistedAuthReducer.value.user)
    const accessToken = useAppSelector((state) => state.persistedAuthReducer.value.access_token)
    var store = useAppSelector((state) => state.persistedAuthReducer.value.store)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    useEffect(() => {
        store != null && router.push(`/store/${store}`)
    }, [])

    const createStore = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const values = {
            "store_name": store_name,
            "slug": store_name.toLowerCase().split(" ").join("_"),
            "location": location,
            "description": description,
            "contact": contact,
            "user": user && user._id,
            "image": selectedFile
        }
        try {
            const response = await axios.post(
                "/store/create",
                JSON.stringify(values),
                { 
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization" : `Bearer ${accessToken}`
                    },
                    withCredentials: true
                }
            )

            if (response) {
                dispatch(registerUserStore({ store: response.data.store._id }))
                router.push(`/store/${response.data.store._id}`)
            }
        } catch (err: any) {
            if (!err?.response) {
                setErrorMessage(err.message)
            } else if (err.response?.status === 409) {
                setErrorMessage("Store already exists")
            } else {
                setErrorMessage("Cannot create store")
                console.log(err.message)
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
                                    onChange={(e) => setStore_name(e.target.value)}
                                    onClick={resetError}
                                    value={store_name}
                                    name="store_name"
                                />
                                <input 
                                    placeholder="Location"
                                    className="input_2"
                                    type="text"
                                    onChange={(e) => setLocation(e.target.value)}
                                    onClick={resetError}
                                    value={location}
                                    name="location"
                                />
                                <input 
                                    placeholder="Contact"
                                    className="input_2"
                                    type="text"
                                    onChange={(e) => setContact(e.target.value)}
                                    onClick={resetError}
                                    value={contact}
                                    name="contact"
                                />
                                <div className="mb-4">
                                    <label htmlFor="store_poster" className="mr-4">Store Poster:</label>
                                    <input 
                                        placeholder="Choose Store Poster"
                                        type="file"
                                        onChange={handleFileChange}
                                        onClick={resetError}
                                        name="image"
                                    />
                                </div>
                                <textarea 
                                    placeholder="Description"
                                    className="input_2 h-[50px]"
                                    onChange={(e) => setDescription(e.target.value)}
                                    onClick={resetError}
                                    value={description}
                                    name="description"
                                />
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

export default StoreForm

