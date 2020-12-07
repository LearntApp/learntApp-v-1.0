var express = require('express');
var router = express.Router();


// Import the tutor controllers
let tutorController = require('../controllers/tutor');
// Import authentication controller
let { ensureAuthentication } = require('../config/auth');


// TUTOR CONTROLLERS
/* GET user public dashboard page. */
router.get('/:id', tutorController.displayUserPublicDashboard);



module.exports = router;
