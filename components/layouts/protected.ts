"use client"

import { redirect } from 'next/navigation'
import { useAppSelector } from '@/redux/store'
import { Props } from '@/types'


const ProtectedLayout = ({ children }: Props) => {
    const user = useAppSelector((state) => state.authReducer.value.user)
    var isAuthenticated = user ? true : false

    if (isAuthenticated) {
        return children
    } else {
        redirect("/login")
    }

}

export default ProtectedLayout