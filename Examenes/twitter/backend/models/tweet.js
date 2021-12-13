var mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    usuario: String,
    nombre: String,
    urlImagen: String,
});

const tweetSchema = new mongoose.Schema({
    idUsuario: mongoose.Types.ObjectId,
    tweet: String,
    hashtags: String,
    usuario: usuarioSchema,
});

module.exports = mongoose.model('tweet', tweetSchema)