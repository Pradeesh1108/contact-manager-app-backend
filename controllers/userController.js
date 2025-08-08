const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
//@description Register a User
//@route POST /api/user/register
//@access public

const registerUser = asyncHandler( async(req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All the fields are mandatory!")
    }

    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user  = User.create({
        username,
        email,
        hashedPassword
    });
    console.log(`Username created ${user}`)
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }
    else{
        res.status(400);
        throw new Error("User data is not valid")
    }
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