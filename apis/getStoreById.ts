"use client"

import axios from '@/config/axios'
import { useAppSelector } from '@/redux/store'

export default async function getStoreById (store: Array<String>) {
    try {
        if (store) {
            const store_id = store[0]
            const response = await axios.get(
                "/store",
                {
                    params: { id: store_id },
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            )
            if (response) {
                console.log(response)
                return response.data.message
            }
        }
        
        return null  
    } catch (err: any) {
        console.log(err.message)
    }

    return null
}