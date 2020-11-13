var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET tutorlistPage page. */
router.get('/list', function(req, res, next) {
  res.render('tutors/list', { title: 'Find a Tutor' });
});


/* GET tutorSignUp page. */
router.get('/TutorRegistration', function(req, res, next) {
  res.render('tutors/regTutor', { title: 'Sign up to be a tutor' });
});

/* GET studentSignUp page. */
router.get('/StudentRegistration', function(req, res, next) {
  res.render('auth/regStudent', { title: 'Sign up to be a tutor' });
});

module.exports = router;
