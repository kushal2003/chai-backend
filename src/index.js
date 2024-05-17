//while talking to database always use try catch  aur aysnc await (yeh maan ke chalo ki db dusre continent mei hai )
// require('dotenv').config({path : './env'}) 

//this destroys consistency of the code



import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

import express from "express"
const app = express()
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



connectDB()