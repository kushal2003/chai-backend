import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

//methods run kab honge , jab koi url hit krega tabhi naaa,  tabhi yeh routes bnaaye gye hai 

router.route("/register").post(registerUser);
//similarly login wagera bhi aa sakta hai 

export default router