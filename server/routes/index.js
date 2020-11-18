var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);


/* GET tutorlistPage page. */
router.get('/list', indexController.displayListPage);

/* GET tutorSignUp page. */

router.get('/TutorRegistration', indexController.displayTutorRegistrationPage);

/* GET studentSignUp page. */

router.get('/StudentRegistration', indexController.displayStudentRegistrationPage);

module.exports = router;
