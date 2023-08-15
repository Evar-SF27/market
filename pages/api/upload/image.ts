import dbConnect from '@/config/dbConfig'
import upload from '@/middlewares/multer'

export default async function handler (req: any, res: any) {
    dbConnect()

    var { method, image } = req
    if (method != "POST") return res.status(400).json({ success: false, message: "Method is not allowed"})


    var uploadImage = upload.single("image")
    uploadImage(req, res, (err) => {
        if (err) return res.status(400).json({ success: false, message: err.message })

        res.status(200).json({ success: true, message: req.file.filename })
    })
}