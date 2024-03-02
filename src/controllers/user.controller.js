import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

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

    const { username, fullName, email, password, avata, coverImage } = req.body;

    if ([username, fullName, email, password].some((field) => field.trim() === '')) {
        throw new ApiError(400, 'All fields required');
    }
})

export { registerUser };