var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var delivery_men = require('../models/delivery-men');

// Get addmited delivery men

router.get('/admitted', function(req, res) {
    delivery_men.find({ admitted: true })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Get waiting to be to be admitted delivery men

router.get('/waiting-admitted', function(req, res) {
    delivery_men.find({ admitted: false })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

//Eliminar motorista
router.delete('/remove/:delivery_id', function(req, res) {
    const delivery_id = req.params.delivery_id
    delivery_men.deleteOne({
            _id: delivery_id
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Delivery_man Authentication

router.post('/login', function(req, res) {
    delivery_men.findOne({ email: req.body.email }).then(resp => {
        if (resp == null) {
            res.status(400).json("Correo o contraseña incorrecta")
        } else {
            if (resp.password == req.body.password) {
                if (resp.admitted) {
                    token = jwt.sign({ resp }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRES_IN })
                    res.json({ resp, token });
                    res.end();
                } else {
                    res.status(400).json('Aun no ha sido admitido o fue rechazdo como notorista')
                }

            } else {
                res.status(400).json("Contraseña incorrecta")
            }
        }
    }).catch(err => {
        res.send(err);
        res.end();
    })
});

//Crear petición para obtener cuenta de motorista
router.post('/request', function(req, res) {
    let delivery_man = new delivery_men(req.body);
    delivery_man.admitted = false;
    delivery_man.save().then(result => {
        res.send(result);
        res.end();
    }).catch(err => {
        res.send(error);
        res.end();
    })
});

//Aceptar peticion de creacion de cuenta
router.put('/accept_request/:delivery_id', function(req, res) {
    const delivery_id = req.params.delivery_id
    delivery_men.updateOne({ _id: delivery_id }, { admitted: true })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })

});


module.exports = router;