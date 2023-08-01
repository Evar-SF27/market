"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/redux/store'
import { Props } from '@/types'


const ProtectedLayout = ({ children }: Props) => {
    const router = useRouter()
    const user = useAppSelector((state) => state.authReducer.value.user)
    var isAuthenticated = false

    useEffect(() => {
        isAuthenticated = Boolean(user)
    }, [user])

    if (isAuthenticated) {
        return children
    } else {
        router.push({
            pathname: "/login",
            query: { returnUrl: router.asPath }
        })
    }

}

export default ProtectedLayout