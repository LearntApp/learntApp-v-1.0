const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


// Create Student schema instance
const Student = require('../models/student');
const { Passport } = require('passport');


// INDEX CONTROLLERS
module.exports = {

    // GET student registration page
    displayStudentRegistrationPage: (req, res, next) => {
        res.render('student/regStudent', { title: 'Sign up to be a Student', displayName: req.user ? req.user.firstName : ''});
    },

    // POST student registration page - HANDLE student registration
    processStudentRegistration: (req, res) => {
        // grab form inputs
        const { firstName, lastName, email, password, phone } = req.body;
        let formErrors = [];

        // PASSWORD VALIDATIONS
        // check required fields
        if (!firstName || !lastName || !email || !password || !phone) {
            formErrors.push({ msg: 'Please fill all the require (*) fields' });
        }
        // check password length
        if(password.length < 6) {
            formErrors.push({ msg: 'Password must be at least 6 characters.' });
        }

        // check errors
        if (formErrors.length > 0) {
            res.render('student/regStudent', {
                title: 'Sign up to be a Student',
                formErrors,
                firstName,
                lastName,
                email,
                password,
                phone
            });
        } else {
            // validation passed
            Student.findOne({ email: email })
            .then(user => {
                // if user already exists
                formErrors.push({  msg: 'Email is already registered' });
                // if user = false (user is false because the search (User.findOne) was not successfully) - user doesn't exist on DB
                if (user) {
                    // render errors and failed to register user
                    res.render('student/regStudent', {
                        title: 'Sign up to be a Student',
                        formErrors,
                        firstName,
                        lastName,
                        email,
                        password,
                        phone
                    });
                } else {
                    const newStudent = new Student({
                        firstName,
                        lastName,
                        email,
                        password,
                        phone
                    });

                    // Hash password
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newStudent.password, salt, (err, hash) => {
                        if(err) throw err;
                        // set password to hashed
                        newStudent.password = hash;
                        // save user
                        newStudent.save()
                        .then(user => {
                            req.flash('success_msg', 'You are now registered and can log in')
                            res.redirect('/');
                        })
                        .catch(err => console.log(err));
                    }));
                }
            })
            .catch(err => console.log(err));
        }
    },

    // Login handle
    processUserLogin: (req, res, next) => {
        passport.authenticate('local', (err, user) => {
            //server error
            if (err){
                return next(err);
            }
            // is there a user login error?
            if (!user) {
                req.flash('error_msg', 'Authentication Error');
                return res.redirect('/login');
            }
            req.login(user, (err) => {
                // server error?
                if(err) {
                    return next(err);
                }
                req.flash('success_msg', 'Log in successfully!');
                return res.redirect('/');
            });
        })(req, res, next);
    },

    // Logout handle
    performLogout: (req, res) => {
        req.logOut();
        req.flash('success_msg', 'Logout successfully');
        res.redirect('/login');
    }
}