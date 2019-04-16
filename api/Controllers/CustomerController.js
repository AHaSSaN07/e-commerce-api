const express = require('express');
const joi = require('joi')
const Customer = require('../Models/CustomerModel')


const router = express.Router();


function validateCustoemr(customer) {
    const schema = {
        name: joi.string().min(3).required(),
        email: joi.string().required(),
        phone: joi.string(),
        address: joi.string()
    };

    return joi.validate(customer, schema);
}


router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        console.log(customers)
        if (customers) res.send(customers)
        else {
            res.send("no customers")
        }
    } catch (error) {
        console.log(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const customer = await Customer.findById(id)
        if (customer) res.send(customer)
        else {
            res.send("Customer not found")
        }
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/add', async (req, res) => {
    try {
        const cus = req.body;
        
        const newCustomer = new Customer({ ...cus });
        // console.log(validateCustoemr(cus).error)
        if (!validateCustoemr(cus).error) {
            const response = await newCustomer.save()
            res.send(response)
        }
        else {
            res.status(400).send('not a valid customer');
        }
    } catch (error) {
        console.log(error.message)
    }
})

router.delete('/:id',async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByIdAndDelete(id);
        if (!customer) return res.status(400).send('Customer not found');
        return res.send(customer);
    } catch (error) {
        console.log(error.message)
    }
})


router.put('/:id',async (req, res) => {
    const { id } = req.params
    if (!validateCustoemr(req.body).error) {
        const response = await Customer.findByIdAndUpdate(id, { ...req.body })
        res.send(response)
    }
    else {
        res.status(400).send('not a valid customer');
    }
})


module.exports = router