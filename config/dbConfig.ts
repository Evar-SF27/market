import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const MONGODB_URI: string | undefined = process.env.MONGODB_URI 
const CONNECTION_OPTIONS: object = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

const dbConnect = async () => {
  try {
    MONGODB_URI && (
      await mongoose.connect(MONGODB_URI, CONNECTION_OPTIONS)
    )
  } catch (err) {
    console.error(err)
  }

  mongoose.connection.once('open', (_: any) => {
    console.log('Database connected')
  })

  mongoose.connection.on("error", (err: any) => {
    console.error("Connection error: ", err)
  })
}

export default dbConnect