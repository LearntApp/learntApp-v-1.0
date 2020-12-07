let express = require('express');

// import User model
const User = require('../models/user');


// INDEX CONTROLLERS
module.exports = {
    displayHomePage: (req, res, next) => {
        res.render('index', {title: 'Home', userPayload: req.user ? req.user : ''});
    },
    
    displayAboutPage: (req, res, next) => {
        res.render('about', { title: 'About', userPayload: req.user ? req.user : ''});
    },

    displayListPage: async (req, res, next) => {
        const tutors = await User.find({ userType: 'tutor' });
        console.log(tutors);
        res.render('tutor/list', { title: 'Find a Tutor', tutors: tutors, userPayload: req.user ? req.user : '' });
    }
}
