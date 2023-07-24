import mongoose from "mongoose"
import dotenv from "dotenv"

const dbConnect = async () => {
  dotenv.config()

  const MONGODB_URI: string | undefined = process.env.MONGODB_URI 
  const CONNECTION_OPTIONS: object = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000, 
  }

  mongoose.connection.setMaxListeners(20)

  try {
    MONGODB_URI && (
      await mongoose.connect(MONGODB_URI, CONNECTION_OPTIONS)
    )
  } catch (err) {
    console.error(err)
    return Promise.reject(err)
  }

  mongoose.connection.once('open', (_: any) => {
    console.log('Database connected')
  })

  mongoose.connection.on("error", (err: any) => {
    console.error("Connection error: ", err)
  })
}

export default dbConnect