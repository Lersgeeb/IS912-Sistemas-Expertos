var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var admin = require('../models/admin');

// Admin Login

router.post('/login', function(req, res) {
    admin.findOne({ email: req.body.email }).then(resp => {
        if (resp == null) {
            res.send("Correo o contraseña incorrecta");
            res.end();
        } else {
            if (resp.password == req.body.password) {
                token = jwt.sign({ resp }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRES_IN })
                res.json({ resp, token });
                res.end();
            } else {
                res.send("Contraseña incorrecta");
                res.end();
            }
        }
    }).catch(err => {
        res.send(err);
        res.end();
    })
})


module.exports = router;