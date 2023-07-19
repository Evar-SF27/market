"use client"

import { useState, useRef } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { useRouter } from 'next/router'

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
    email: "",
    password: ""
}

const Form = () => {
    const [authType, setAuthType] = useState("register")
    const [errorMessage, setErrorMessage] = useState("")
    const [toggledPassword, setToggledPassword] = useState(false)

    const router = useRouter()
    const errRef = useRef()
    const isLogin = authType === "login"
    const isRegister = authType === "register"

    const register = async () => {}

    const login = async () => {}

    const handleFormSubmit = async () => {
        if (isLogin) await login()
        if (isRegister) await register()
    }

    const handleTogglePassword = () => {
        setToggledPassword(prev => !prev)
    }

    const resetError = () => {
        setErrorMessage("")
    }
  return (
    <div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Form
