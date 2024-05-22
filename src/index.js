// require('dotenv').config({path : './env'}) 
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

// approach 1 : 

// function connectDB(){}
// connectDB()

// Better approach use , iffi 

/*
( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=> {
            console.log("APP not able to communicate ", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR",error)
        throw error
    }
})()
*/
// Now in the above one our index file got polluted  ,  we need to make it more clear  
// dusri file mei humara saara data ho  and hum usse import krva rhe , yeh better aur clean approach hai 



