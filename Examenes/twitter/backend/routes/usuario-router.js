var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var tweet = require('../models/tweet');

router.get('/info/:user_id', async function(req, res) {
    try {
        const user_id = req.params.user_id;
        const result = await usuario.findOne(
            { _id:user_id }, 
            { contrasena:0 }
        )
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({errorMsg:error})
    }
})

router.post('/login', async function(req, res) {
    try {
        const login = req.body;
        const user = await usuario.findOne({ usuario: login.usuario })

        if (user == null) {
            res.status(400).json({authIsValid: 0})
        } else {
            if (user.contrasena == login.contrasena) {
                res.status(200).json({ authIsValid:1, user:user });
                
            } else {
                res.status(400).json({authIsValid: 0})
            }
        }
    } catch (error) {
        res.status(500).json({errorMsg:error})
    }
})

router.get('/following_tweets/:user_id', async function(req, res) {
    try {
        let tweetsList = []
        const user_id = req.params.user_id;
        const user = await usuario.findOne(
            { _id:user_id }, 
            { following:1 }
        )
        
        for(user_followed_id of user.following){
            let tweets = await tweet.find({
                idUsuario: user_followed_id,
            })
            tweetsList = tweetsList.concat(tweets)
        }
        res.status(200).json(tweetsList)
     
    } catch (error) {
        res.status(500).json({errorMsg:error})
    }
})


module.exports = router;