import Category from '@/model/Category'
import dbConnect from '@/config/dbConfig'

export default async function handler(req: any, res: any) {
    dbConnect()
    const { method } = req
    if (method !== 'GET') return res.status(405).json({ success: false, message: "Method not supported"})
    
    try {
        const categories = await Category.find()
        if (!categories) return res.status(404).json({ success: false, message: "Categories not found" })
        
        res.status(200).json({ success: true, categories: categories })

    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }  
}