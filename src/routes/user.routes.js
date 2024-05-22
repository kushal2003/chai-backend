import { Router } from "express";
import { registerUser}  from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

//methods run kab honge , jab koi url hit krega tabhi naaa,  tabhi yeh routes bnaaye gye hai 

router.route("/register").post(
    // follows ki just jaane se pehle milke jaana
    upload.fields([
        {
            name: "avatar",
            maxCount : 1,
        },
        {
            name: "CoverImage",
            maxCount: 1,
        }
    ]),
    registerUser
    );
//similarly login wagera bhi aa sakta hai 


export default router