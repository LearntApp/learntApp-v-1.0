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

/* GET tutor listPage page. */
router.get('/list', indexController.displayListPage);

/* POST tutor listPage page. */
router.post('/list', indexController.displaySearchedListPage);

module.exports = router;
