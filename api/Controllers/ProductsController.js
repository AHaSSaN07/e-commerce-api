const express = require('express');
const joi = require('joi')
const Product = require('../Models/ProductsModel')
const auth = require('../middlewares/auth')
 
const router = express.Router();

function validateProduct(customer) {
    const schema = {
        name: joi.string().min(3).max(30).required(),
        description: joi.string(),
        owner: joi.string().required(),
        quantity: joi.number().integer().min(0).required(),
        price: joi.number().min(0).required(),
        discount: joi.number().min(0).max(99).required(),
    };

    return joi.validate(customer, schema);
}


router.get('/', async (req, res) => {
    try {
        const Products = await Product.find();
        // console.log(customers)
        if (Products) res.send(Products)
        else {
            res.send("no Products")
        }
    } catch (error) {
        console.log(error.message)
    }
})


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        if (product) res.send(product)
        else {
            res.send("product not found")
        }
    } catch (error) {
        console.log(error.message)
    }
})




router.post('/add', auth,async (req, res) => {
    try {
        

        const product = req.body;
        console.log(product)
        const newproduct = new Product({ ...product });
        // console.log(validateCustoemr(cus).error)
        if (!validateProduct(product).error) {
            const response = await newproduct.save()
            res.send(response)
        }
        else {
            res.status(400).send('not a valid product');
        }
    } catch (error) {
        console.log(error.message)
    }
})


router.delete('/:id', auth,async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id)
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(400).send('product not found');
        return res.send(product);
    } catch (error) {
        console.log(error.message)
    }
})



router.put('/:id', auth,async (req, res) => {
    const { id } = req.params
    console.log(id)
    if (!validateProduct(req.body).error) {
        const response = await Product.findByIdAndUpdate(id, { ...req.body })
        res.send(response)
    }
    else {
        res.status(400).send('not a valid Product');
    }
})


module.exports = router