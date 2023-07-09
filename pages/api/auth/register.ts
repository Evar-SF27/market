import dbConnect from "../../../config/dbConfig"
import User from "../../../model/User"
import bcrypt from "bcrypt"


export default async function handler(req: any, res: any) {
    dbConnect()
    const { method } = req
    if (method !== 'POST') return res.status(405).json({ success: false, message: "Method not supported"})

    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) return res.status(401).json({ success: false, message: "Incomplete credentials" })
        
        const user = await User.findOne({ email }).exec()
        if (user) return res.status(409).json({ success: false, message: "User already exists" })

        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            "username": username,
            "email": email,
            "password": hashedPassword
        })

        res.status(201).json({ 'success': true, message: `New User ${username} created successfully!` })

    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
    
}