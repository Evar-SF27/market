"use client"

import { useState } from 'react'
import { Formik } from 'formik'
import axios from '@/config/axios' 
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { useAppSelector } from '@/redux/store'

const createSchema = yup.object().shape({
    store_name: yup.string().required("Store name is required"),
    location: yup.string().required("Location is required"),
    description: yup.string().required("Description is required"),
    contact: yup.string().required("Contact is required"),
    photo_url: yup.string().required("Photo URL is required"),
})

const StoreForm = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [store_name, setStore_name] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [contact, setContact] = useState("")
    const [photo, setPhoto] = useState("")

    const user = useAppSelector((state) => state.persistedAuthReducer.value.user)

    const router = useRouter()

    const createStore = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log("Creating Store")
        const values = {
            "store_name": store_name,
            "slug": store_name.toLowerCase().split(" ").join("_"),
            "location": location,
            "description": description,
            "contact": contact,
            "user": user && user._id,
        }
        console.log(values)
        try {
            const response = await axios.post(
                "api/store/store",
                values,
                { 
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            )

            if (response) {
                console.log(response)
            }
        } catch (err: any) {
            console.log(err)
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
                        <h1 className="text-primary font-bold text-[3rem] max-sm:text-[2.5rem]">Market Place</h1>
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
                                <textarea 
                                    placeholder="Description"
                                    className="input_2"
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

