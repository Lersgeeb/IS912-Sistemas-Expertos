var mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {         
        nombreProducto: String, 
        descripcion: String, 
        cantidad: Number, 
        Precio: Number
    }
);

var userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    ordenes: [orderSchema]
});

module.exports = mongoose.model('usuarios',  userSchema)