const mongoose = require("mongoose")



const schema = new mongoose.Schema({
    name: {type : String,required : true},
    description:  String,
    owner: {type : String,required : true},
    quantity: {type : Number,required : true},
    price : {type : Number,required : true,minlength : 1},
    discount: {type : Number,required : false,maxlength : 99}
})

const Product = mongoose.model('Product',schema);
module.exports = Product

