"use client"

import { useState, useRef, LegacyRef } from 'react'
import { Formik } from 'formik'
import { axiosPrivate as axios } from '@/config/axios' 
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'

const registerSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
})

const loginSchema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
})

const initialValuesRegister = {
    username: "",
    email: "",
    password: ""
}

const initialValuesLogin = {
    username: "",
    email: "",
    password: ""
}

const Form = () => {
    const [authType, setAuthType] = useState("register")
    const [errorMessage, setErrorMessage] = useState("")
    const [toggledPassword, setToggledPassword] = useState(false)

    const router = useRouter()
    // const userRef = useRef<HTMLInputElement | undefined>(null)
    // const legacyUserRef: LegacyRef = userRef
    const legacyErrorRef = useRef<HTMLDivElement>()
    // const legacyErrorRef: LegacyRef<HTMLDivElement | null | undefined> = errRef
    const isLogin = authType === "login"
    const isRegister = authType === "register"

    const register = async (values: any, onSubmitProps: any) => {
        try {
            const response = await axios.post(
                "api/auth/register",
                JSON.stringify(values)
            )

            if(response) {
                router.push("/")
            }
        } catch (err: any) {
            if (!err?.response) {
                setErrorMessage("No Server Response")
            } else if (err.response?.status === 409) {
                setErrorMessage("User with this email already exists")
            } else {
                setErrorMessage(err.message)
            }

            // legacyErrorRef.current?.focus() 
        } finally {
            onSubmitProps.resetForm()
        }
    }

    const login = async (values: any, onSubmitProps: any) => {
        try {
            const response = await axios.post(
                "api/auth/login",
                JSON.stringify(values)
            )

            if(response) {
                router.push("/")
            }
        } catch (err: any) {
            if (!err?.response) {
                setErrorMessage(err.message)
            } else if (err.response?.status === 400) {
                setErrorMessage("Incomplete credentials: Username or Password is missing")
            } else if (err.response?.status === 401) {
                setErrorMessage("Unauthorised")
            } else if (err.response?.status === 404) {
                setErrorMessage("User not found")
            } else {
                setErrorMessage("Login failed")
            }

            // legacyErrorRef.current?.focus() 
        } finally {
            onSubmitProps.resetForm()
        }
    }

    const handleFormSubmit = async (values: any, onSubmitProps: any) => {
        if (isLogin) await login(values, onSubmitProps)
        if (isRegister) await register(values, onSubmitProps)
    }

    const handleTogglePassword = () => {
        setToggledPassword(prev => !prev)
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
                <div className="w-[100%] flex justify-between">
                    <div 
                        className={`${isRegister && "bg-gray-100 font-bold"} w-[50%] flex justify-center items-center h-[60px] text-[18px] text-[#4a4a4a] font-semibold`}
                        onClick={() => setAuthType("register")}
                    >
                        Register
                    </div>
                    <div 
                        className={`${isLogin && "bg-gray-50 font-bold"} w-[50%] flex justify-center items-center h-[60px] text-[18px] text-[#4a4a4a] font-semibold`}
                        onClick={() => setAuthType("login")}
                    >
                        Sign In
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center py-8">
                        <h1 className="text-primary font-bold text-[3rem] max-sm:text-[2.5rem]">Market Place</h1>
                        <p className="text-center">Fill in the required fields to proceed to authentication.</p>
                    </div>
                    <div>
                        <Formik
                            onSubmit={handleFormSubmit}
                            initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
                            validationSchema={isLogin ? loginSchema : registerSchema}
                        >
                            {({ values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="mx-8">
                                        <div className={`${!errorMessage && "hidden"} bg-red-100 rounded-[5px] h-fit py-4 px-4 mb-6 text-red-500`}>
                                            <span className="text-red-600 font-bold">Error: </span>{errorMessage}
                                        </div>
                                        {isRegister && (
                                            <div className="input_container">
                                                <input
                                                    placeholder="Username"
                                                    className="input"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    onClick={resetError}
                                                    value={values.username}
                                                    // error={Boolean(touched.username) && Boolean(errors.username)}
                                                    // helperText={touched.username && errors.username}
                                                    name="username"
                                                />
                                            </div>
                                        )}
                                        <div className="input_container">
                                            <input 
                                                placeholder="Email"
                                                className="input"
                                                type="email"
                                                // ref={userRef}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                onClick={resetError}
                                                value={values.email}
                                                name="email"
                                            />
                                        </div>
                                        <div className="input_container">
                                            <input 
                                                placeholder="Password"
                                                type={`${toggledPassword ? "text" : "password"}`}
                                                className="input"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                onClick={resetError}
                                                min={8}
                                                value={values.password}
                                                name="password"
                                            />
                                            {toggledPassword ? 
                                                <EyeIcon className="icons-small text-primary" onClick={handleTogglePassword} /> 
                                                : 
                                                <EyeSlashIcon className="icons-small text-primary" onClick={handleTogglePassword} />}
                                        </div>
                                        <div
                                            className={`${isRegister && "hidden"} flex justify-end text-[12px] -mt-2 mr-2 font-semibold text-gray-500`}
                                        >
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                        <button
                                            type="submit"
                                            className="mt-8 bg-primary w-[100%] py-4 rounded-[5px] text-white text-[18px] font-semibold"
                                        >
                                            {isLogin ? "SIGN IN" : "SIGN UP"}
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

export default Form
