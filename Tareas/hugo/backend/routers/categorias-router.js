var express = require('express');
var router = express.Router();
var categoria = require('../models/categoria');
//var mongoose = require('mongoose');

//Pedir Categorias
router.get('/', async (req, res) => {
    try {
        const result = await categoria.find({});
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error}); 
    }
})

//Crear nueva categoria
router.post('/', async (req, res) => {
    try {
        let cat = req.body;
        cat.empresas = [];
        let nuevaCategoria = new categoria(cat);
        const result = await nuevaCategoria.save();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error}); 
    }
})



//Pedir Empresas
router.get('/:cat_id', async (req, res) => {
    try {
        const cat_id = req.params.cat_id
        console.log(cat_id)
        const result = await categoria.findOne(
            {
                _id: cat_id,
            }
        );
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error}); 
    }
})

module.exports = router;