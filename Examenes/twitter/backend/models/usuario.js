var mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    usuario: String,
    contrasena: String,
    nombre: String,
    apellido: String,
    urlImagen: String,
    tweets: String,
    followers: [mongoose.Types.ObjectId],
    following: [mongoose.Types.ObjectId]
});

module.exports = mongoose.model('usuario', usuarioSchema)