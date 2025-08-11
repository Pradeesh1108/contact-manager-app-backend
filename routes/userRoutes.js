const express = require('express')
const {registerUser, 
       loginUser, 
       currentUser
} = require('../controllers/userController')
const validateToken = require('../middleware/validateTokenHandler')

const router = express.Router()

// Public routes (no authentication required)
router.post('/register', registerUser)
router.post('/login', loginUser)

// Protected routes (authentication required)
router.get('/current', validateToken, currentUser)

module.exports = router;