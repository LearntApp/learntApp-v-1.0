const mongoose = require('mongoose');
const Schema = mongoose.Schema; // change variable name
// import Review schema
const Review = require('./review');

const UserSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dataUpdated: [{
        type: Date,
        default: Date.now
    }],
    userType: {
        type: String,
        trim: true,
        default: 'student',
        lowercase: true,
        required: true
    },
    profilePicture: {
        
    },
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
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    tutorDetails: {
        dateCreated: {
            type: Date,
            default: Date.now
        },
        updateDate: [{
            type: Date,
            default: Date.now
        }],
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
        }
    }
}, 
{
    collections: "users"
});

const User = mongoose.model('User', UserSchema);
module.exports = User;


// QUERY FUNCTIONS
// after (post) we delete a campground we are going to use this middleware to delete all the reviews of the campground
UserSchema.post('findOneAndDelete', async (userDeleted) => {
    console.log(userDeleted);
    
    if (userDeleted) {
        const reviewsFromDeletedUser = userDeleted.reviews;
        reviewsFromDeletedUser.map(async reviewId => {
            console.log(reviewId);
            await Review.deleteMany( { _id: reviewId } );
        });
    }
})