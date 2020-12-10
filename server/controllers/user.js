const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');


// Create User schema instance
const User = require('../models/user');


// INDEX CONTROLLERS
module.exports = {

    // GET user login page
    displayLoginPage: (req, res, next) => {
        res.render('login', { title: 'Login', userPayload: req.user ? req.user : ''});
    },

    // GET user dashboard
    displayUserDashboard: (req, res) => {
        res.render('user/altDash',{ title: 'User Dashboard', userPayload: req.user ? req.user : '' });
    },

    // GET user registration page
    displayUserRegistrationPage: (req, res, next) => {
        res.render('user/registration', { title: 'Sign up to be a Student', userPayload: req.user ? req.user : ''});
    },

    // POST user registration page - HANDLE user registration
    processUserRegistration: (req, res) => {
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
            res.render('user/registration', {
                title: 'Sign up to be a Student',
                formErrors,
                firstName,
                lastName,
                email,
                password,
                phone,
                userPayload: req.user ? req.user : ''
            });
        } else {
            // validation passed
            User.findOne({ email: email })
            .then(user => {
                // if user already exists
                formErrors.push({  msg: 'Email is already registered' });
                // if user = false (user is false because the search (User.findOne) was not successfully) - user doesn't exist on DB
                if (user) {
                    // render errors and failed to register user
                    res.render('user/registration', {
                        title: 'Sign up to be a Student',
                        formErrors,
                        firstName,
                        lastName,
                        email,
                        password,
                        phone,
                        userPayload: req.user ? req.user : ''
                    });
                } else {
                    const newUser = new User({
                        dateCreated: Date.now(),
                        dateUpdated: Date.now(),
                        userType: 'student',
                        firstName,
                        lastName,
                        email,
                        password,
                        phone
                    });

                    // Hash password
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        // set password to hashed
                        newUser.password = hash;
                        // save user
                        newUser.save()
                        .then(user => {
                            req.flash('success_msg', 'You are now registered and can log in')
                            res.redirect('/user/login');
                        })
                        .catch(err => console.log(err));
                    }));
                }
            })
            .catch(err => console.log(err));
        }
    },

     // POST user registration page - HANDLE user registration
     processUserUpdatePhone: (req, res) => {
        // grab form inputs
        const {
                id,
                action,
                password, 
                phone, 
                background, 
                subject,
                rate,
                locations,
                days,
                hours,
                levels,
                banner,
                methodology
             } = req.body;

        if(action === 'update photo')
        {
            console.log("update photo")
            let updatedUser = User({
                "_id": id
            });
            
        }
        if(action === 'update contact')
        {
            let updatedUser = User({
                "_id": id,
                "phone": phone
            });

            User.updateOne({_id: id}, updatedUser, (err) => {
                if (err) 
                {
                    console.log(err);
                    res.end();    
                } 
                else 
                {
                    User.findById(id, (err, updatedUser1) => {
                        if (err) 
                        {
                            console.log(err);
                            res.end();
                        }
                        else 
                        {
                            //SHOW THE EDIT VIEW
                            res.render('user/altDash',{ title: 'User Dashboard', userPayload: updatedUser1 ? updatedUser1 : ''})
                        }
                    });   
                }
            });
        }
        if(action === 'update password')
        {
            let updatedUser = User({
                "_id": id,
                "password": password
            });

            User.updateOne({_id: id}, updatedUser, (err) => {
                if (err) 
                {
                    console.log(err);
                    res.end();    
                } 
                else 
                {
                    User.findById(id, (err, updatedUser1) => {
                        if (err) 
                        {
                            console.log(err);
                            res.end();
                        }
                        else 
                        {
                            //SHOW THE EDIT VIEW
                            res.render('user/altDash',{ title: 'User Dashboard', userPayload: updatedUser1 ? updatedUser1 : ''})
                        }
                    });   
                }
            });
        }
        if(action === 'register / update tutor')
        {
            console.log(req.body);

            let updatedUser = User({
                "_id": id,
                "background": background,
                "subject": subject,
                "hourlyRate": rate,
                "banner": banner,
                "methodology": methodology,
                "locations": locations,
                "preferredDays": days, 
                "preferredHours": hours,
                "academicLevels": levels,
                "userType": 'tutor',
                "dataUpdated" : Date.now()
            });

            User.updateOne({_id: id}, updatedUser, (err) => {
                if (err) 
                {
                    console.log(err);
                    res.end();    
                } 
                else 
                {
                    User.findById(id, (err, updatedUser1) => {
                        if (err) 
                        {
                            console.log(err);
                            res.end();
                        }
                        else 
                        {
                            console.log(updatedUser1);
                            //SHOW THE EDIT VIEW
                            res.render('user/altDash',{ title: 'User Dashboard', userPayload: updatedUser1 ? updatedUser1 : ''})
                        }
                    });   
                }
            });
        }
    },

    // Login handle
    processUserLogin: (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/user/dashboard',
            failureRedirect: '/user/login',
            failureFlash: true,
            //successFlash: req.flash('success_msg', 'Logged in successfully')
        })(req, res, next);
    },

    // Logout handle
    performLogout: (req, res) => {
        req.logOut();
        req.flash('success_msg', 'Logout successfully');
        res.redirect('/user/login');
    }
}