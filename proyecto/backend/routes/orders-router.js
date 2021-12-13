var express = require('express');
var router = express.Router();
var orders = require('../models/orders');
var mongoose = require('mongoose');
var category = require('../models/categories');
var customer = require('../models/customers');
var delivery_men = require('../models/delivery-men');


const delivery_states = [
    'Tomada',
    'En camino',
    'En origen',
    'En destino'
]

//Pedir todas las órdenes activas
router.get('/active_orders', async function(req, res) {
    try {
        let orderList = await orders.find({
            delivery_state: {
                $ne: delivery_states[3]
            },
            delivery_state: {
                $ne: ''
            },
        })
        let orders_detailed = []
        if (orderList) {
            for (order of orderList) {
                let order_detailed = {
                    order: order,
                    business_name: '',
                    business_logo: '',
                    customer_name: '',
                    delivery_man_name: '',
                }
                console.log(order.business_id)
                let categoryBusiness = await category.findOne({
                    'business_list._id': order.business_id
                }, {
                    'business_list.$': 1,
                })

                if (categoryBusiness) {
                    order_detailed.business_name = categoryBusiness.business_list[0].name
                    order_detailed.business_logo = categoryBusiness.business_list[0].logo
                    order_detailed.customer_name = await getNameCustomerById(order.client_id)
                    order_detailed.delivery_man_name = await getNameDeliveryManById(order.delivery_man_id)
                    orders_detailed.push(order_detailed)
                }
            }
        }


        res.status(200).json(orders_detailed)

    } catch (error) {
        res.status(500).json(error)
    }
});


//Pedir ordenes sin motorista asignado
router.get('/available_orders', async function(req, res) {
    try {
        let orderList = await orders.find({ delivery_man_id: null }, {
            payment_info: 0,
            location: 0
        })
        let orders_detailed = []
        for (order of orderList) {
            let order_detailed = {
                order: order,
                business_name: '',
                business_logo: '',
                customer_name: ''
            }
            console.log(order.business_id)
            let categoryBusiness = await category.findOne({
                'business_list._id': order.business_id
            }, {
                'business_list.$': 1,
            })

            order_detailed.business_name = categoryBusiness.business_list[0].name
            order_detailed.business_logo = categoryBusiness.business_list[0].logo
            order_detailed.customer_name = await getNameCustomerById(order.client_id)
            orders_detailed.push(order_detailed)
        }


        res.status(200).json(orders_detailed)

    } catch (error) {
        res.status(500).json(error)
    }
});

//Pedir ordenes del usuario cliente
router.get('/myorders/:user_id', async function(req, res) {
    try {
        const user_id = req.params.user_id
        let orderList = await orders.find({ client_id: user_id })
        let orders_detailed = []
        for (order of orderList) {
            let order_detailed = { order: order, business_name: '' }
            console.log(order.business_id)
            let categoryBusiness = await category.findOne({
                'business_list._id': order.business_id
            }, {
                'business_list.$': 1,
            })

            order_detailed.business_name = categoryBusiness.business_list[0].name
            orders_detailed.push(order_detailed)
        }


        res.status(200).json(orders_detailed)

    } catch (error) {
        res.status(500).json(error)
    }

});

//Pedir orden segun id
router.get('/order_detailed/:order_id', function(req, res) {
    const order_id = req.params.order_id
    orders.findOne({ _id: order_id })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});


//Pedir ordenes del motorista
router.get('/mydelivery/:delivery_man_id', async function(req, res) {

    try {
        const delivery_man_id = req.params.delivery_man_id
        let orderList = await orders.find({ delivery_man_id: delivery_man_id }, {
                payment_info: 0,
                location: 0
            }

        )
        let orders_detailed = []
        for (order of orderList) {
            let order_detailed = {
                order: order,
                business_name: '',
                business_logo: '',
                customer_name: ''
            }
            console.log(order.business_id)
            let categoryBusiness = await category.findOne({
                'business_list._id': order.business_id
            }, {
                'business_list.$': 1,
            })

            order_detailed.business_name = categoryBusiness.business_list[0].name
            order_detailed.business_logo = categoryBusiness.business_list[0].logo
            order_detailed.customer_name = await getNameCustomerById(order.client_id)
            orders_detailed.push(order_detailed)
        }


        res.status(200).json(orders_detailed)

    } catch (error) {
        res.status(500).json(error)
    }
});

//Agregar nueva orden
router.post('/', async function(req, res) {
    try {
        let order = req.body;
        order.delivery_state = ''
        order.delivery_man_id = null
        let newOrder = new orders(order);
        let result = await newOrder.save()

        await customer.updateOne({ _id: order.client_id }, {
            cart: []
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
});

//Cambiar estado de Orden
router.put('/set_state', function(req, res) {
    let state = req.body.state;
    console.log(delivery_states.includes(state))
    if (delivery_states.includes(state)) {
        let order_id = req.body.order_id
        orders.updateOne({ _id: order_id }, { delivery_state: state })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    } else {
        res.status(400).json({ ok: 0, msg: 'Estado inválido' })
    }
});

//Asignar motorista a orden
router.put('/assign_delivery_man', function(req, res) {
    let order_id = req.body.order_id
    let delivery_man_id = req.body.delivery_man_id;
    orders.updateOne({ _id: order_id }, {
            delivery_man_id: delivery_man_id,
            delivery_state: delivery_states[0]
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

//pedir orden detalles
router.get('/order_deep_detailed/:order_id', async function(req, res) {

    let products = []
    let productsDetailed = []
    let amountJson = {}
    let order = await orders.findOne({ _id: req.params.order_id })
    for (let order_product of order.order_products) {
        products.push(order_product.product_id)
        amountJson[order_product.product_id] = order_product.amount
    }
    let searched = []
    let categories = await category.find()
    console.log(products)
    for (let cat of categories) {
        for (let business of cat.business_list) {
            for (let product of business.products) {
                console.log({ product_id: product._id })
                searched.push(product._id)
                if (isProductOrdered(products, product._id)) {
                    productsDetailed.push({
                        info: product,
                        business_name: business.name,
                        business_id: business._id,
                        amount: amountJson[product._id],
                    })
                }
            }
        }
    }
    order = await orders.findOne({ _id: req.params.order_id }, { order_products: 0 })

    res.status(200).json({ order_info: order, productsDetailed: productsDetailed })

});

function isProductOrdered(productIdList, productId) {
    for (let product of productIdList) {
        if (`${product._id}` == `${productId}`) return true;
    }
    return false
}

async function getNameCustomerById(userId) {
    const customerDoc = await customer.findOne({ _id: userId })
    return customerDoc.fullname;
}

async function getNameDeliveryManById(deliveryManId) {
    const deliveryManDoc = await delivery_men.findOne({ _id: deliveryManId })
    return deliveryManDoc.fullname;
}


module.exports = router;