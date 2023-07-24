// import { NextResponse } from 'next/server'
import dbConnect from '@/config/dbConfig'
import User from '@/model/User'
import { Query } from 'mongoose'

export default async function handler(req: { method: any }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message: string | any | Query<any[], any, {}, any, "find"> }): void; new(): any }; end: { (arg0: string): void; new(): any } }; sendHeader: (arg0: string, arg1: string[]) => void }) {
    dbConnect()
    const { method } = req

    switch(method) {
        case 'GET':
            const users = await User.find()
            res.status(200).json({ success: true, message: users })
            break
        case 'PUT':
            res.status(200).json({ success: true, message: "POST Request" })
            break
        case 'DELETE':
            res.status(200).json({ success: true, message: "DELETE Request" })
            break
        default:
            res.sendHeader("Allow", ['GET', 'PUT', 'DELETE' ])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}