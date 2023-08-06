import dbConnect from '@/config/dbConfig'
import upload from '@/middlewares/multer'
import Store from '@/model/Store'

export default async function handler(req: { body?: any; method?: any }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message?: any; store?: any }): void; new(): any }; end: { (arg0: string): void; new(): any } }; sendHeader: (arg0: string, arg1: string[]) => void }) {
    dbConnect()
    const { method } = req

    switch(method) {
        case 'GET':
            const stores = await Store.find()
            res.status(200).json({ success: true, message: stores })
            break
        // case 'POST':
        //     const { method } = req

        //     try {
        //         const { store_name, slug, user, location, description, contact } = req.body
        //         if (!store_name || !slug || !user || !location || !description || !contact ) return res.status(401).json({ success: false, message: "Incomplete credentials" })
                
        //         const store = await Store.findOne({ slug }).exec()
        //         if (store) return res.status(409).json({ success: false, message: "Store already exists" })

        //         await Store.create({
        //             "store_name": store_name,
        //             "slug": slug,
        //             "user": user, 
        //             "location": location, 
        //             "description": description, 
        //             "contact": contact
        //         })

        //         res.status(201).json({ success: true, message: `New Store ${store_name} created successfully!` })

        //     } catch (error: any) {
        //         console.log(error)
        //         res.status(500).json({ success: false, message: error.message })
        //     }
            
        //     break
        case 'PUT':
            var { id } = req.body
            if (!id) return res.status(401).json({ success: false, message: "Unauthorised: ID required" })
            
            var store = await Store.findOne({ _id: id }).exec()
            if (!store) return res.status(404).json({ success: false, message: "Store doesn't exist" })

            if (req.body?.store_name) store.store_name = req.body?.store_name
            if (req.body?.slug) store.slug = req.body?.slug
            if (req.body?.location) store.location = req.body?.location
            if (req.body?.description) store.description = req.body?.description
            if (req.body?.contact) store.contact = req.body?.contact
            if (req.body?.photo_url) store.photo_url = req.body?.photo_url

            const result = await store.save()
            res.status(200).json({ success: true, store: result })

            break
        case 'DELETE':
            var { id } = req.body
            if (!id) return res.status(401).json({ success: false, message: "Unauthorised: ID required" })

            var store = await Store.findOne({ _id: id }).exec()
            if (!store) return res.status(404).json({ success: false, message: "Store doesn't exist" })

            await store.deleteOne()
            res.status(200).json({ success: true, message: "Store was successfully deleted" })

            break
        default:
            res.sendHeader("Allow", ['GET', 'POST', 'PUT', 'DELETE' ])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}