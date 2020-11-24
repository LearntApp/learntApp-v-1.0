const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
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
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;