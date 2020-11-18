let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}
module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About'});
}
module.exports.displayListPage = (req, res, next) => {
    res.render('tutors/list', { title: 'Find a Tutor'});
}
module.exports.displayTutorRegistrationPage = (req, res, next) => {
    res.render('tutors/regTutor', { title: 'Sign up to be a tutor'});
}
module.exports.displayStudentRegistrationPage = (req, res, next) => {
    res.render('auth/regStudent', { title: 'Sign up to be a tutor'});
}
