let express = require('express');
let router = express.Router();


// INDEX CONTROLLERS
module.exports = {
    displayHomePage: (req, res, next) => {
        res.render('index', {title: 'Home'});
    },
    
    displayAboutPage: (req, res, next) => {
        res.render('about', { title: 'About'});
    },

    displayListPage: (req, res, next) => {
        res.render('tutors/list', { title: 'Find a Tutor'});
    },

    displayTutorRegistrationPage: (req, res, next) => {
        res.render('tutors/regTutor', { title: 'Sign up to be a tutor'});
    },

    displayStudentRegistrationPage: (req, res, next) => {
        res.render('auth/regStudent', { title: 'Sign up to be a student'});
    }
}
