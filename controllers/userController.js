const asyncHandler = require('express-async-handler')
//@description Register a User
//@route POST /api/user/register
//@access public

const registerUser = asyncHandler( async(req, res) => {
    res.json({message: "Register the user"})
}); 


//@description login a User
//@route POST /api/user/login
//@access public

const loginUser = asyncHandler(async(req, res) => {
    res.json({message: "Login user"})
}); 

//@description current User info
//@route GET /api/user/current
//@access private

const currentUser = asyncHandler(async( req, res) => {
    res.json({message: "Current user info"})
});


module.exports = {registerUser, loginUser, currentUser}