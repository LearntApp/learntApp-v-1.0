const mongoose = require('mongoose');
const Schema = mongoose.Schema; // change variable name

const ReviewSchema = new Schema({
    body: {
        type: String,
        trim: true,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    tutorId: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
}, 
{
    collections: "reviews"
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;