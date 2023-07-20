"use server"

import User from '@/model/User'
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import Cookies from 'cookies'
import dotenv from 'dotenv'

export default async function handler(req: any, res: any) {
    dotenv.config()

    const ACCESS_KEY: Secret = process.env.JWT_ACCESS_SECRET_KEY!
    const REFRESH_KEY: Secret = process.env.JWT_REFRESH_SECRET_KEY!

    const { method } = req
    if (method !== 'GET') return res.status(405).json({ success: false, message: "Method not supported"})

    const cookies = new Cookies(req, res)
    const refreshToken: string | null = cookies.get('refresh-token')!
    const user = await User.findOne({ refreshToken }).exec()
    const genUser = user._id.valueOf()
    if (!user) return res.status(403)

    jwt.verify(
        refreshToken, 
        REFRESH_KEY,
        (err, decoded: jwt.JwtPayload | any) => {
            if (err || genUser !== decoded?.userId) return res.status(403).json({ success: false, message: "Unauthorized"})
            
            const accessToken = jwt.sign(
                { userId: genUser },
                ACCESS_KEY,
                { expiresIn: '30s' }
            )

            res.json({ accessToken: accessToken })
        }   
    )
}