const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Adding new user to db
router.post('/signup', (req, res) => {
    bycrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save().then(result => {
                console.log(result)
                res.status(201).json({
                    message: 'User Created'
                })
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            });
        }
    })
});

// Handles logins
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        // Comparing password of first user found
        bycrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({
                    email: user.email,
                    userId: user._id
                }, 
                // JWT Key
                "secret",
                {
                    // Setting token expiration time
                    expiresIn: "1h"
                }
                )
                return res.status(200).json({
                    message: 'Authorization Successful',
                    token: token
                },
                );
            } else {
                res.status(401).json({
                    message: 'Authorization Failed'
                })
            }
        })
    })
})

// Deleting user from db
router.delete('/:userId', async (req, res) => {
    try{
        const removedUser = await User.deleteOne({_id: req.params.userId})
        res.json(removedUser)
    } catch (err) {
        res.json({
            message: err
        })
    }
});

module.exports = router; 