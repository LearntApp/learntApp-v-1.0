const express = require('express');


// Create User schema instance
const User = require('../models/user');
// Create review schema instance
const Review = require('../models/review');


// INDEX CONTROLLERS
module.exports = {    
    
    // GET user public dashboard
    displayUserPublicDashboard: async (req, res) => {
        const tutor = await User.findById(req.params.id).populate('reviews');
        res.render('tutor/publicDashboard',{ title: 'Tutor profile', tutor: tutor, userPayload: req.user ? req.user : '' });
    },

    // POST reviews
    addReview: async (req, res) => {
        const { ...formInput } = req.body;
        const user = await User.findById(req.params.id);
        const newReview = new Review({ 
            reviewBody: formInput.reviewBody, 
            rating: formInput.rating,
            //studentId: req.userPayload._id,
            tutorId: user._id,
            dateCreated: Date.now()
        });
        user.reviews.push(newReview);
        await newReview.save();
        await user.save();
        res.redirect(`/tutor/${user._id}`);
    },

    // DELETE delete single review
    deleteReview: async (req, res) => {
        const { id, reviewId } = req.params;
        await User.findByIdAndUpdate(id, { $pull: {reviews: reviewId } }); // using mongo query to delete an element from an array 
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/tutor/${id}`)
    }
}