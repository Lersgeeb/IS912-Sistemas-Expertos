var mongoose = require('mongoose');


const cart_product = new mongoose.Schema({
    product_id: mongoose.Types.ObjectId,
    amount: Number,
});

const clientSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    token: String,
    cart: [cart_product],
});



module.exports = mongoose.model('clients', clientSchema);