import User from '@/model/User'
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'
import Cookies from 'cookies'
import dotenv from 'dotenv'
import dbConnect from '@/config/dbConfig'

export default async function handler(req: any, res: any) {
    dotenv.config()
    dbConnect()
    const { method } = req

    const ACCESS_KEY: Secret  = process.env.JWT_ACCESS_SECRET_KEY!
    const REFRESH_KEY: Secret  = process.env.JWT_REFRESH_SECRET_KEY!

    if (method !== 'POST') return res.status(405).json({ success: false, message: "Method not supported"})
    
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(401).json({ success: false, message: "Incomplete credentials" })

        const user = await User.findOne({ email }).exec()
        if (!user) return res.status(404).json({ success: false, message: "User not found" })

        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) return res.status(401).json({ success: false, message: "Unauthorised" })

        const payload = { "userId": user._id }

        const accessToken = jwt.sign(payload, ACCESS_KEY, { expiresIn: '60s' })
        const refreshToken = jwt.sign(payload, REFRESH_KEY, { expiresIn: '1d' })

        user.refreshToken = refreshToken
        await user.save()
       
        const cookies = new Cookies(req, res)
        cookies.set('refresh-token', refreshToken, {
            httpOnly: true,
            sameSite: true,
            // secure: true, 
            maxAge: 24 * 60 * 60 * 1000
        })
        
        res.status(200).json({ success: true, user: user, accessToken: accessToken })

    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }  
}