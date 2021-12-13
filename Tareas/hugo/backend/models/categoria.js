var mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {         
        nombreProducto: String,
        descripción: String,
        precios: Number,
    }
);

const businessSchema = new mongoose.Schema(
    {         
        nombreEmpresa: String, 
        imagen: String, 
        productos: [productSchema]
    }
);

var categorySchema = new mongoose.Schema({
    nombreCategoria: String,
    descripcion: String,
    color: String,
    icono: String,
    empresas: [businessSchema],
});

module.exports = mongoose.model('categorias',  categorySchema)