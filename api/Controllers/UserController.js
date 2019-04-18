const express = require('express');
// const joi = require('joi')
const { User, validateUser } = require('../Models/UsersModel')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const router = express.Router()
const auth = require('../middlewares/auth')
// const jwt = require('jsonwebtoken')
// const config = require("config")

//get current user
router.get('/me', auth,async (req,res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user)
})

router.post('/', async (req, res) => {
    try {
        const user = req.body;
        if (!validateUser(user).error) {
            let user = await User.findOne({ email: req.body.email })
            if (user) return res.status(400).send("user with this email already exsists!")
            user = new User(_.pick(req.body,["name","email","password"]))
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password,salt)
            const response = await user.save()
            const token = user.genAuthToken()
            res.header('x-auth-token',token).send(_.pick(response,["_id","name","email"]))
        }
        else {
            res.status(400).send(validateUser(req.body).error.details[0].message);

        }
    } catch (error) {
        res.send(error.message)
    }

})



module.exports = router