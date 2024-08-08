const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${ conn.connection.host }`)
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${ error.message }`)
        process.exit(1)
    }
}

module.exports = { connectDB }