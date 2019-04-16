const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    name: {type : String, required : true},
    email : String,
    phone : Number,
    address : String
})

const Customer = mongoose.model('Customer',schema);

module.exports = Customer