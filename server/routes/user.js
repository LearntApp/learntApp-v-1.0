var express = require('express');
var router = express.Router();


// Import the student controllers
let userController = require('../controllers/user');
// Import authentication controller
let { ensureAuthentication } = require('../config/auth');


// USER CONTROLLERS
// GET user login page
router.get('/login', userController.displayLoginPage);

// POST user login page - HANDLE user login
router.post('/login', userController.processUserLogin);

/* GET user registration page. */
router.get('/registration', userController.displayUserRegistrationPage);

// POST user registration page - HANDLE user registration
router.post('/registration', userController.processUserRegistration);

/* GET user logout page. */
router.get('/logout', userController.performLogout);

/* GET user dashboard page. */
router.get('/dashboard', ensureAuthentication, userController.displayUserDashboard);


module.exports = router;
