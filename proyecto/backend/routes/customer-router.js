var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


var customer = require('../models/customers');
var category = require('../models/categories');


// Get all Custumers

router.get('/', function(req, res) {
    customer.find().then(resp => {
        res.send(resp);
        res.end();
    }).catch(err => {
        res.send(err);
        res.end();
    });
})

// Get one customer

router.get('/:id', function(req, res) {
    customer.find({ _id: req.params.id }).then(resp => {
        res.send(resp);
        res.end();
    }).catch(err => {
        res.send(err);
        res.end();
    });
});

// Customer Login with token

router.post('/login', function(req, res) {
    customer.findOne({ email: req.body.email }).then(resp => {
        if (resp == null) {
            res.status(400).json("Correo o contraseña incorrecta")
        } else {
            if (resp.password == req.body.password) {
                token = jwt.sign({ resp }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRES_IN })
                res.json({ resp, token });
                res.end();
            } else {
                res.status(400).json("Contraseña incorrecta")
            }
        }
    }).catch(err => {
        res.send(err);
        res.end();
    })
})

// Add one Customer (Signup)

router.post('/signup', function(req, res) {
    let client = new customer({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        cart: req.body.cart
    })

    client.save().then(resp => {
        token = jwt.sign({ resp }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRES_IN })
        res.json({ resp, token });
        res.end()
    }).catch(err => {
        res.send(err);
        res.end()
    })
})

// Add product to the cart

router.put('/:id/add-product', function(req, res) {
    customer.updateOne({
        _id: req.params.id
    }, {
        $push: {
            cart: req.body
        }
    }).then(resp => {
        res.status(200).json({ resp })
    }).catch(err => {
        res.send(err);
        res.end();
    })
})


// Delete product form cart

router.put('/:id/product/:id_product/delete', function(req, res) {
    customer.updateOne({
        _id: req.params.id
    }, {
        $pull: {
            'cart': { product_id: req.params.id_product }
        }
    }).then(resp => {
        res.status(200).json({ resp });
        res.end();
    }).catch(err => {
        res.send(err);
        res.end();
    })
})

//get product desc of user
router.get('/cart/:id', async function(req, res) {
    try {
        let products = []
        let productsDetailed = []
        let amountJson = {}
        let client = await customer.findOne({ _id: req.params.id }, {cart:1})
        for (order of client.cart){
            products.push(order.product_id)
            amountJson[order.product_id] = order.amount
        }
        let searched = []
        let categories = await category.find()
        console.log(products)
        for(let cat of categories){
            for(let business of cat.business_list){
                for(let product of business.products){
                    console.log({product_id:product._id})
                    searched.push(product._id)   
                    if(isProductOrdered(products, product._id)){
                        productsDetailed.push(
                            {   
                                info: product, 
                                business_name:business.name,
                                business_id: business._id,
                                amount: amountJson[product._id]
                            }
                        )
                    }
                }
            }
        }
        res.status(200).json(productsDetailed)
    } catch (error) {
        res.status(500).json({error:'Error en Server'})
    }
});

function isProductOrdered(productIdList, productId){
    for(let product of productIdList){
        if(`${product._id}` == `${productId}`) return true;
    }
    return false
}



module.exports = router;