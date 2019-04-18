const mongoose = require("mongoose")
const joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, unique: false }
})
schema.methods.genAuthToken = function(){
    const token = jwt.sign({_id:this._id},config.get('jwtPrivateKey'));
    return token;

}

function validateUser(user) {
    const schema = {
        name: joi.string().required().max(50).min(5),
        email: joi.string().required().max(255).min(5),
        password: joi.string().min(5).required()
    };

    return joi.validate(user, schema);
}




const User = mongoose.model('User', schema);
exports.User = User;
exports.validateUser = validateUser;

