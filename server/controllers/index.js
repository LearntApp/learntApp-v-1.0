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
    },

    displaySearchedListPage: async (req, res, next) => {
        const tutors = await User.find({ userType: 'tutor', 
                                         subject: req.body.Subject, 
                                         hourlyRate: { $lt: req.body.Range },
                                         locations: { $in: req.body.locations },
                                         preferredHours: { $in: req.body.times },
                                         preferredDays: { $in: req.body.days } });
        console.log(tutors);
        res.render('tutor/list', { title: 'Find a Tutor', tutors: tutors, userPayload: req.user ? req.user : '' });
    }
}
