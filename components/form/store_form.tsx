"use client"

import { useState } from 'react'
import { Formik } from 'formik'
import axios from '@/config/axios' 
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/redux/store'
import { AppDispatch } from '@/redux/store'

const createSchema = yup.object().shape({
    store_name: yup.string().required("Store name is required"),
    location: yup.string().required("Location is required"),
    description: yup.string().required("Description is required"),
    contact: yup.string().required("Contact is required"),
    photo_url: yup.string().required("Photo URL is required"),
})

const initialValuesCreate = {
  store_name: "",
  location: "",
  description: "",
  contact: "",
  photo_url: "",
}

const StoreForm = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const user = useAppSelector((state) => state.authReducer.value.user)

    const router = useRouter()

    const createStore = async (values: any, onSubmitProps: any) => {
        try {
            const response = await axios.post(
                "api/store/store",
                JSON.stringify(values),
                { 
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            )
        } catch (err: any) {
            console.log(err)
            if (!err?.response) {
                setErrorMessage(err.message)
            } else if (err.response?.status === 409) {
                setErrorMessage("Store already exists")
            } else {
                setErrorMessage("Cannot create store")
            }
        } finally {
            onSubmitProps.resetForm()
        }
    }

    const handleFormSubmit = async (values: any, onSubmitProps: any) => {
        createStore(values, onSubmitProps)
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
                        <Formik
                            onSubmit={handleFormSubmit}
                            initialValues={initialValuesCreate}
                            validationSchema={createSchema}
                        >
                            {({ values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm }) => (
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="mx-8">
                                        <div className={`${!errorMessage && "hidden"} bg-red-100 rounded-[5px] h-fit py-4 px-4 mb-6 text-red-500`}>
                                            <span className="text-red-600 font-bold">Error: </span>{errorMessage}
                                        </div>
                                        <input 
                                            placeholder="Store Name"
                                            className="input_2"
                                            type="text"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            onClick={resetError}
                                            value={values.store_name}
                                            name="store_name"
                                        />
                                        <input 
                                            placeholder="Location"
                                            className="input_2"
                                            type="text"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            onClick={resetError}
                                            value={values.location}
                                            name="location"
                                        />
                                        <input 
                                            placeholder="Contact"
                                            className="input_2"
                                            type="text"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            onClick={resetError}
                                            value={values.contact}
                                            name="contact"
                                        />
                                        <input 
                                            placeholder="User"
                                            className="input_2 hidden"
                                            type="text"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            onClick={resetError}
                                            value={user._id}
                                            name="user"
                                        />
                                        <textarea 
                                            placeholder="Description"
                                            className="input_2"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            onClick={resetError}
                                            value={values.description}
                                            name="description"
                                        />
                                        <div>
                                          <label htmlFor="photo">Display Photo: </label>
                                          <input 
                                              placeholder="Photo"
                                              className="mt-2 mb-8 mx-4"
                                              type="file"
                                              onBlur={handleBlur}
                                              onChange={handleChange}
                                              onClick={resetError}
                                              value={values.photo_url}
                                              name="photo"
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
                            )}

                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoreForm

