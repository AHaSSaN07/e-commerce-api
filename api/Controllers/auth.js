const express = require('express');
const joi = require('joi')
const { User } = require('../Models/UsersModel')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const router = express.Router()
// const jwt = require('jsonwebtoken')
// const config = require("config")
router.post('/', async (req, res) => {
    try {
        const user = req.body;
        if (!validate(user).error) {
            let user = await User.findOne({ email: req.body.email })
            if (!user) return res.status(400).send("invalid email or password!")
            const isValidPass = await bcrypt.compare(req.body.password,user.password)
            console.log(req.body.password)
            if(!isValidPass){
                return res.status(400).send("not a valid password!")
            }
            const token = user.genAuthToken()
            res.send(token)
        }
        else {
            res.status(400).send(validate(req.body).error.details[0].message);

        }
    } catch (error) {
        res.send(error.message)
    }

})



function validate(req) {
    const schema = {
        email: joi.string().required().max(255).min(5),
        password: joi.string().min(5).required()
    };

    return joi.validate(req, schema);
}



module.exports = router