const express = require("express")
const mongoose = require('mongoose')
const CustomerController = require('./api/Controllers/CustomerController')
const ProductController = require('./api/Controllers/ProductsController')
const UserController = require('./api/Controllers/UserController')
const auth = require('./api/Controllers/auth')
const config = require('config');
const app = express()

console.log( config.get('jwtPrivateKey'))
if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
  }

app.use(express.json());



//api here
app.use('/api/customers',CustomerController);
app.use('/api/products',ProductController);
app.use('/api/users',UserController)
app.use('/api/auth',auth)





mongoose.connect("mongodb://localhost/customers")
    .then(() => console.log("connected!"))
    .catch((error) => console.log(error.message))



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));