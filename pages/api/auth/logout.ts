import User from '@/model/User'
import Cookies from 'cookies'


export default async function handler(req: any, res: any) {
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