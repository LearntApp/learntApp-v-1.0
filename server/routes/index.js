var express = require('express');
var router = express.Router();

// Import the index controllers
let indexController = require('../controllers/index');

// Import the student controllers
let userController = require('../controllers/user');

// Import authentication controller
let { ensureAuthentication } = require('../config/auth');


// INDEX CONTROLLERS
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET tutorlistPage page. */
router.get('/list', ensureAuthentication, indexController.displayListPage);

/* GET tutorSignUp page. */
router.get('/TutorRegistration', indexController.displayTutorRegistrationPage);

/* GET tutorSignUp page. */
router.get('/login', indexController.displayLoginPage);

// STUDENT CONTROLLERS
/* GET studentSignUp page. */
router.get('/registration', userController.displayUserRegistrationPage);

// POST student registration page - HANDLE student registration
router.post('/registration', userController.processUserRegistration);

// POST student login page - HANDLE student login
router.post('/login', userController.processUserLogin);

/* GET studentSignUp page. */
router.get('/logout', userController.performLogout);

/* GET studentDashBoard page. */
router.get('/dashboard', ensureAuthentication, userController.displayUserDashboardPage);

module.exports = router;
