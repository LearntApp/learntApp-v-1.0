let express = require('express');
let router = express.Router();


// INDEX CONTROLLERS
module.exports = {
    displayHomePage: (req, res, next) => {
        res.render('index', {title: 'Home', userPayload: req.user ? req.user : ''});
    },
    
    displayAboutPage: (req, res, next) => {
        res.render('about', { title: 'About', userPayload: req.user ? req.user : ''});
    },

    displayListPage: (req, res, next) => {
        res.render('tutor/list', { title: 'Find a Tutor', userPayload: req.user ? req.user : ''});
    }
}
