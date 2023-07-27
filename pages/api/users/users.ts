// import { NextResponse } from 'next/server'
import dbConnect from '@/config/dbConfig'
import User from '@/model/User'

export default async function handler(req: { body?: any; method?: any }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message?: string | any[]; user?: any }): void; new(): any }; end: { (arg0: string): void; new(): any } }; sendHeader: (arg0: string, arg1: string[]) => void }) {
    dbConnect()
    const { method } = req

    switch(method) {
        case 'GET':
            const users = await User.find()
            res.status(200).json({ success: true, message: users })
            break
        case 'PUT':
            var { id } = req.body
            if (!id) return res.status(401).json({ success: false, message: "Unauthorised: ID required" })
            
            var user = await User.findOne({ _id: id }).exec()
            if (!user) return res.status(404).json({ success: false, message: "User doesn't exist" })

            if (req.body?.first_name) user.first_name = req.body?.first_name
            if (req.body?.last_name) user.last_name = req.body?.last_name
            if (req.body?.username) user.username = req.body?.username
            if (req.body?.contact) user.contact = req.body?.contact
            if (req.body?.location) user.location = req.body?.location

            const result = await user.save()
            res.status(200).json({ success: true, user: result })    

            break
        case 'DELETE':
            var { id } = req.body
            if (!id) return res.status(401).json({ success: false, message: "Unauthorised: ID required" })
            
            var user = await User.findOne({ _id: id }).exec()
            if (!user) return res.status(404).json({ success: false, message: "User doesn't exist" })

            await user.deleteOne()
            res.status(200).json({ success: true, message: "User was successfully deleted" })

            break
        default:
            res.sendHeader("Allow", ['GET', 'PUT', 'DELETE' ])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}