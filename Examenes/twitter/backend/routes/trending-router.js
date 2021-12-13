var express = require('express');
var router = express.Router();
var trending = require('../models/trending');

router.get('/', async function(req, res) {
    try {
        const result = await trending.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({errorMsg:error})
    }
})


module.exports = router;