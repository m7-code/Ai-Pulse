const express = require('express');
const router = express.Router();
// loginUser ko bhi import karein
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);

// Naya Route for Login
router.post('/login', loginUser);

module.exports = router;