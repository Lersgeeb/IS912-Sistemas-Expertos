var mongoose = require('mongoose');

/*
-Categoria
--Pedir Categorias Populares (las primeras 4) (get)************
--Pedir todas Categorias (get) ********************
--Pedir Empresas de categoria (get)****************
--Pedir productos de empresa (get)*****************
--Agregar empresa a categoria (put)****************
--Agregar producto a empresa (put)*****************

-Cliente
-- Crear usuario cliente (post)  ************************
-- Iniciar sesion con usuario cliente (post) ******************
-- Pedir Carrito del cliente (Get) ******************
-- Agregar Producto a carrito de usuario cliente (Put)*************
-- Eliminar Producto del carrito de usuario cliente (delete)
-- Cerrar Sesión de usuario cliente (delete) xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

-Admin
-- Iniciar sesion con usuario administrador (post) *********************************
-- Cerrar Sesión con usuario administrador (delete) xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



-Motorista
-- Iniciar sesion con usuario cliente (post)
-- Obtener todos los motoristas admitidos (get)
-- Obtener todos los motoristas no admitidos (get) 

-- crear peticion para obtener cuenta de motorista (post)
-- Aceptar peticion de creacion de cuenta (put)
-- Eliminar motorista (delete) ********


-Orden
-- Pedir ordenes sin motorista asignado (get) *************
-- Pedir ordenes del usuario cliente (get) ***********
-- Pedir orden segun id (get) ****************
-- Pedir ordenes del motorista (get) **********
-- Pedir todas las ordenes activas  (get) ******
-- Agregar nueva orden (post) *********
-- Cambiar estado de Orden (put) *****
-- Asignar motorista a orden (put) *****

*/


//motorista
const deliveryManSchema = new mongoose.Schema({
    admitted: Boolean,
    fullname: String,
    email: String,
    password: String,
    token: String,
});

//client
const clientSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    token: String,
    cart: [cart_product],
});

//Admin
const AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
    token: String,
});

const cart_product = new mongoose.Schema({
    product_id: String,
    amount: Number,
});


//Ordenes


const orderSchema = new mongoose.Schema({
    business_id: String,
    client_id: String,
    delivey_man_id: String,
    delivery_state: String,
    location: locationSchema,
    payment_info: paymentInfoSchema,
    order_products: [orderProductSchema]
});

const orderProductSchema = new mongoose.Schema({
    product_id: String,
    amount: Number,
});

const locationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
});

const paymentInfoSchema = new mongoose.Schema({
    card_number: Number,
    cvv: Number,
    expired_date: String,
});

//Categorias

var categorySchema = new mongoose.Schema({
    name: String,
    logo: String,
    business_list: [businessSchema],
});


const businessSchema = new mongoose.Schema({
    name: String,
    logo: String,
    banner: String,
    description: String,
    rating: Number,
    phone_number: String,
    products: [productsSchema]
});

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
});




module.exports = mongoose.model('categorias', categorySchema)