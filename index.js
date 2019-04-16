const express = require("express")
const mongoose = require('mongoose')
const CustomerController = require('./api/Controllers/CustomerController')

const app = express()

//middlewares here
app.use(express.json());


//api here
app.use('/api/customers',CustomerController);






mongoose.connect("mongodb://localhost/customers")
    .then(() => console.log("connected!"))
    .catch((error) => console.log(error.message))



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));