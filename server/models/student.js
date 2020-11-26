const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: Number,
        trim: true,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    userType: {
        type: String,
        trim: true,
        default: 'student',
        lowercase: true
    },
    profilePicture: {

    }
}, 
{
    collections: "students"
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;