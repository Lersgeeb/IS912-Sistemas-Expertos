var express = require('express');
var router = express.Router();
var tweet = require('../models/tweet');
var usuario = require('../models/usuario');

router.post('/', async function(req, res) {
    try {
        const user_id = req.body.idUsuario;
        const user = await usuario.findOne({ _id:user_id });
        let tweetJson = {
            ...req.body,
            usuario: {
                usuario:  user.usuario,
                nombre: user.nombre,
                urlImagen: user.urlImagen,
            }
        }


        let tweetCount = `${parseInt(user.tweets) + 1}`
        await usuario.updateOne(
            { _id:user_id },
            { tweets: tweetCount}
        );
        
        let newTweet = new tweet(tweetJson);
        const result = await newTweet.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({errorMsg:error})
    }
})


module.exports = router;