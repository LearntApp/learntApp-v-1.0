const express = require('express');


// Create User schema instance
const User = require('../models/user');


// INDEX CONTROLLERS
module.exports = {    
    
    // GET user public dashboard
    displayUserPublicDashboard: async (req, res) => {
        const tutor = await User.findById(req.params.id);
        res.render('tutor/publicDashboard',{ title: 'Tutor profile', tutor: tutor, userPayload: req.user ? req.user : '' });
    }
}