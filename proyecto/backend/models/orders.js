var mongoose = require('mongoose');

const orderProductSchema = new mongoose.Schema({
    product_id: mongoose.Types.ObjectId,
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

const orderSchema = new mongoose.Schema({
    business_id: mongoose.Types.ObjectId,
    client_id: mongoose.Types.ObjectId,
    delivery_man_id: mongoose.Types.ObjectId,
    delivery_state: String,
    location: locationSchema,
    payment_info: paymentInfoSchema,
    order_products: [orderProductSchema]
});

module.exports = mongoose.model('orders', orderSchema);