import dbConnect from '@/config/dbConfig'
import Store from '@/model/Store'

export default async function handler(req: { body: { store_name: any; slug: any; user: any; location: any; description: any; contact: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message: any }): void; new(): any } } }) {
    dbConnect()

    try {
        const { store_name, slug, user, location, description, contact } = req.body
        if (!store_name || !slug || !user || !location || !description || !contact ) return res.status(401).json({ success: false, message: "Incomplete credentials" })
        
        const store = await Store.findOne({ slug }).exec()
        if (store) return res.status(409).json({ success: false, message: "Store already exists" })

        await Store.create({
            "store_name": store_name,
            "slug": slug,
            "user": user, 
            "location": location, 
            "description": description, 
            "contact": contact
        })

        res.status(201).json({ success: true, message: `New Store ${store_name} created successfully!` })

    } catch (error: any) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}