import mongoose from 'mongoose'

/*
 * Connects to the MongoDB database using Mongoose.
 * Logs a message once the connection is successfully established.
 */

const connectDB=async ()=>{

    // Event listener to confirm MongoDB connection
    mongoose.connection.on('connected',()=>{
        console.log("DB connected")
    })
      // Connect to the MongoDB database
    await mongoose.connect(`${process.env.MONGODB_URI}/meal-plans`)

}

export default connectDB;