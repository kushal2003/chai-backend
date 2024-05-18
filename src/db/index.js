//here we are connecting db from mongoose
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB= async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connect !! DB_HOST : ${connectionInstance.connection.host} `)
        
    } catch (error) {
        //node hume directly jo process chal rha hai uska accesss de deta hai 
        console.error("MongoDB connection error",error);
        process.exit(1)
    }
}

export default connectDB