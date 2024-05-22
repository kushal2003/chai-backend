import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app= express()


app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    credentials : true,
}))

// now middleware

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true, limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser)

//routes import 
import  userRouter  from "./routes/user.routes.js";


//routes declaration , 
app.use("/api/v1/users",userRouter) // this is a middleware
// ab router ko laane ke liye middleware chahiye ,  pehle toh app.get use krr rhe the toh ussi mei routes aur controllers wali problem sort kr rhe hai 
// jo url bnega woh is type ka hoga : api/v1/users/register

export { app }