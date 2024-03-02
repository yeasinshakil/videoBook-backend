import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const registerUser = asyncHandler(async (req, res) => {
    // get user information from frontend
    // validaton - not empty
    // check if user already exist- username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object- create entry in DB
    // remove password and refresh token field from response
    // check for user creation
    // return response
    // console.log(req)

    const { username, fullName, email, password } = req.body;
    // Required fields checked

    if ([username, fullName, email, password].some((field) => field?.trim() === '')) {
        throw new ApiError(400, 'All fields required');
    }

    // username and email check from the database
    const checkUsernameEmail = await User?.findOne({
        $or: [{ username }, { email }]
    })

    // console.log(checkUsernameEmail)

    if (checkUsernameEmail) {
        throw new ApiError(409, 'Username or email already exists');
    }

    // check user avatar and coverimage
    // Avatar file path reference
    const avatartLocalPath = req?.files?.avatar[0]?.path;
    // coverImage file path reference
    const coverImageLocalPath = req?.files?.coverImage[0]?.path;
    // console.log(avatartLocalPath, coverImageLocalPath)

    if (!avatartLocalPath) {
        throw new ApiError(400, 'Avatar file is required');
    }

    const avatar = await uploadOnCloudinary(avatartLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, 'Avatar file is required');
    }

    const user = await User.create({
        username: username.toLowerCase(),
        fullName,
        email,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        password
    })

})

export { registerUser };