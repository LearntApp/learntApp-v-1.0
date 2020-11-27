var express = require('express');
var router = express.Router();

// Import the index controllers
let indexController = require('../controllers/index');

// Import the student controllers
let studentController = require('../controllers/student');

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
router.get('/StudentRegistration', studentController.displayStudentRegistrationPage);

// POST student registration page - HANDLE student registration
router.post('/StudentRegistration', studentController.processStudentRegistration);

// POST student login page - HANDLE student login
router.post('/login', studentController.processUserLogin);

/* GET studentSignUp page. */
router.get('/logout', studentController.performLogout);

/* GET studentDashBoard page. */
router.get('/StudentDashboard', studentController.displayStudentDashboardPage);

/* GET tutorDashBoard page. */
router.get('/TutorDashboard', studentController.displayTutorDashboardPage);

module.exports = router;
