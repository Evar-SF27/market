import mongoose from 'mongoose'

var userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    contact: {
        type: String
    },
    location: {
        type: String
    },
    store: {
        type: Array
    },
    subscribed_stores: {
        type: Map,
        of: String
    },
    refreshToken: {
        type: String
    }
})

var User =  mongoose.models.User || mongoose.model("User", userSchema)
export default User