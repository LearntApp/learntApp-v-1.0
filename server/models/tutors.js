const mongoose = require('mongoose');

const TutorSchema = new mongoose.Schema({
    name: {
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
        required: true,
        lowercase: true
    },
    phoneNumber: {
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
    background: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    methodology: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },     
    Subjects: {
        type: [String],
        trim: true,
        required: true,
        lowercase: true
    },
    HourlyRate: {
        type: Number,
        trim: true,
        required: true,
        lowercase: true
    },
    Location: {
        type: [String],
        trim: true,
        required: true,
        lowercase: true
    },
    preferredDays: {
        type: [String],
        trim: true,
        required: true,
        lowercase: true
    },
    preferredHours: {
        type: [String],
        trim: true,
        required: true,
        lowercase: true
    },
    academicLevels: {
        type: [String],
        trim: true,
        required: true,
        lowercase: true
    },
    reviews: {
        type: [String],
        trim: true
    },
    profilePicture: {

    }
});

const Tutor = mongoose.model('Tutor', TutorSchema);

module.exports = Tutor;

/* 
delete on the form:
- response time because it should be calculated.
*/