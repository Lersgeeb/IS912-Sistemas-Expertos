var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var category = require('../models/categories');

// Get categories

router.get('/', function(req, res) {
    category.find({}, { name: 1, logo: 1 }).then(resp => {
        res.send(resp);
        res.end();
    }).catch(err => {
        res.send(err);
        res.end();
    })
})

// Get firts 4 categories (Popular)

router.get('/populars', function(req, res) {
    category.find({}, { name: 1, logo: 1 }).limit(4).then(resp => {
        res.send(resp);
        res.end();
    }).catch(err => {
        res.send(err);
        res.end();
    })
})


// Get Business of a category
router.get('/:id/business', function(req, res) {
    category.find({ _id: req.params.id }).then(resp => {
        let data = {
            id: resp[0]._id,
            name: resp[0].name,
            logo: resp[0].logo,
            business: resp[0].business_list
        }
        res.json({ data });
        res.end();
    }).catch(err => {
        res.send(err);
        res.end()
    })
})

// Get Products of a Business

router.get('/:id/business/:id_business', function(req, res) {
    category.find({
            _id: req.params.id,
            'business_list._id': mongoose.Types.ObjectId(req.params.id_business)
        }, {
            "business_list.$": true
        })
        .then(resp => {
            res.status(200).json({ business: resp[0].business_list[0] })

        }).catch(err => {
            res.send(err);
            res.end();
        })
})

// Add a business to a Category

router.put('/:id/add-business', function(req, res) {
    category.updateOne({ _id: req.params.id }, {
        $push: {
            business_list: req.body
        }
    }).then(resp => {
        res.status(200).json({ resp });
        res.end();
    }).catch(err => {
        res.send(err);
        res.end();
    })
})

//Add a product to one business

router.put('/:id/business/:id_business/add-product', function(req, res) {
    category.updateOne({ _id: req.params.id, 'business_list._id': mongoose.Types.ObjectId(req.params.id_business) }, {
        $push: {
            'business_list.$.products': req.body
        }
    }, ).then(resp => {
        res.status(200).json({ resp });
        res.end();
    }).catch(err => {
        res.send(err);
        res.end();
    })
})

//get business detail just with id
router.get('/business/:id_business', async function(req, res) {
    try {
        let categories = await category.findOne({
            'business_list._id': req.params.id_business
        }, {
            'business_list.$': 1,
        })
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;