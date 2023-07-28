import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const uploads = (file: string, folder: any) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            file,
            (result: { public_id: any; url: any }) => {
                resolve({
                    public_id: result.public_id,
                    url: result.url
                })
            },
            {
                resource_type: "auto",
                folder: folder
            }
        )
    })
}

export { uploads, cloudinary }