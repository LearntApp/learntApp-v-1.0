let express = require('express');
let router = express.Router();


// INDEX CONTROLLERS
module.exports = {
    displayHomePage: (req, res, next) => {
        res.render('index', {title: 'Home', displayName: req.user ? req.user.firstName : ''});
    },
    
    displayAboutPage: (req, res, next) => {
        res.render('about', { title: 'About', displayName: req.user ? req.user.firstName : ''});
    },

    displayListPage: (req, res, next) => {
        res.render('tutor/list', { title: 'Find a Tutor', displayName: req.user ? req.user.firstName : ''});
    },

    displayTutorRegistrationPage: (req, res, next) => {
        res.render('tutor/regTutor', { title: 'Sign up to be a Tutor', displayName: req.user ? req.user.firstName : ''});
    },

    displayStudentRegistrationPage: (req, res, next) => {
        res.render('student/regStudent', { title: 'Sign up to be a Student', displayName: req.user ? req.user.firstName : ''});
    },

    displayLoginPage: (req, res, next) => {
        res.render('login', { title: 'Login', displayName: req.user ? req.user.firstName : ''});
    }
}
