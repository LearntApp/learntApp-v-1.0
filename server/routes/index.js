var express = require('express');
var router = express.Router();

// Import the index controllers
let indexController = require('../controllers/index');

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



module.exports = router;
