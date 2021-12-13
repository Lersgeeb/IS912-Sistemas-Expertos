var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');


//Obtener Usuarios
router.get('/', async (req, res) => {
    try {
        const result = await usuario.find({},{nombre:1, apellido:1})
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error}); 
    }
    
});


//Obtener Ordenes usuario
router.get('/:user_id', async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const result = await usuario.findOne(
            {
                _id: user_id,
            },
        )
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error}); 
    } 
});

//solicitar producto 
router.post('/:user_id', async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const user = req.body;
        const result = await usuario.updateOne(
            {
                _id: user_id,
            },
            {
                $push:{
                    ordenes: user,
                }
            }
        )
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error}); 
    } 
});



module.exports = router;