import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req,res)=>{
    // get user details from frontend , which can be dont through postman
    //refresh token and watch history are programatically added

    //validation - not empty 

    // check if user already exist : email , username se check

    // files : avatar aur cover image hai nahi  : they are compulsory 
    //upload then to cloudinary , take url and then story
    // multer ne liya ya nhi yeh bhi check

    //create user object - create entry in db

    //remove password and refresh token from response uske baad frontend pe jayega

    // check for user creation - null reponse hai , ya fir aaya hai , tb hee response aage frwd krenge

    //return response

    const {fullName, email , username, password}= req.body
    console.log("email ", email );

    // if (fullName=="")
    // {
    //     throw new ApiError(400,"Full Name is required");
    // }
    // this was the beginning approach 

    if ([fullName,email,username,password].some((field)=>
        field?.trim()==="")){
            throw new ApiError(400,"All fields are Required");
    }

    // now check if user already exists or not 

    const existedUser = User.findOne({
        $or:[{ username },{ email }]
    })
    if (existedUser)
    {
        throw new ApiError(409,"User mail or username already existed")
    }

    // now files
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath)
    {
        throw new ApiError(400, "Avatar File is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar)
    {
        throw new ApiError(400, "Avatar File is required");
    }

    //now object bnaana hai and data base mei entry 
    //user hee baat krta hai db se

    const user = User.create({
        fullName,
        avatar: avatar.url,
        coverImage : coverImage?.url || "",
        email ,
        password,
        username : username.toLowerCase()
    })
    const createduser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createduser)
    {
        throw new ApiError(500, "Something went wrong while creating the user");
    }

    return res.status(201).json(
        new ApiResponse(200,createduser,"User Registered Successfully")
    )
})

export {registerUser}