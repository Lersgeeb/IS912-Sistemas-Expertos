var mongoose = require('mongoose');

const deliveryManSchema = new mongoose.Schema({
    admitted: Boolean,
    fullname: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('delivery_man', deliveryManSchema);