var express = require('express');
var router = express.Router({ mergeParams: true });


// Import the tutor controllers
let tutorController = require('../controllers/tutor');
// Import authentication controller
let { ensureAuthentication } = require('../config/auth');


// TUTOR CONTROLLERS
/* GET user public dashboard page. */
router.get('/:id', tutorController.displayUserPublicDashboard);


// REVIEWS ROUTES
// POST add review
router.post('/:id/reviews', tutorController.addReview); // we can ensure authentication to create a review (not for now)

// DELETE review
router.delete('/:id/reviews/:reviewId', tutorController.deleteReview);



module.exports = router;
