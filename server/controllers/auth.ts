import User from '../model/User'
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'
import Cookies from 'cookies'

export async function CreateUser(req: any, res: any) {
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

export async function SignIn(req: any, res: any) {
    const { method } = req
    if (method !== 'POST') return res.status(405).json({ success: false, message: "Method not supported"})
    
    const ACCESS_KEY: Secret  = process.env.JWT_ACCESS_SECRET_KEY!
    const REFRESH_KEY: Secret  = process.env.JWT_REFRESH_SECRET_KEY!
    
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

export async function LogOut (req: any, res: any) {
    const { method } = req
    if (method !== 'GET') return res.status(405).json({ success: false, message: "Method not supported"})

    const cookies = new Cookies(req, res)
    const refreshToken = cookies.get('refresh-token')

    const user = await User.findOne({ refreshToken }).exec()

    if (!user) {
        cookies.set('refresh-token', '', {
            httpOnly: true,
            sameSite: true,
            // secure: true, 
            maxAge: 0
        })
    }

    user.refreshToken = ""
    await user.save()
    
    cookies.set('refresh-token', '', {
        httpOnly: true,
        sameSite: true,
        // secure: true, 
        maxAge: 0
    })

    res.status(200).json({ success: true })
}

export async function Refresh(req: any, res: any) {
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