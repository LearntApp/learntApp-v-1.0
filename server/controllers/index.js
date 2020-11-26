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
        res.render('tutor/list', { title: 'Find a Tutor'});
    },

    displayTutorRegistrationPage: (req, res, next) => {
        res.render('tutor/regTutor', { title: 'Sign up to be a Tutor'});
    },

    displayStudentRegistrationPage: (req, res, next) => {
        res.render('student/regStudent', { title: 'Sign up to be a Student'});
    }
}
