var mongoose = require('mongoose');


const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
});

const businessSchema = new mongoose.Schema({
    name: String,
    logo: String,
    banner: String,
    description: String,
    rating: Number,
    phone_number: String,
    email: String,
    products: [productsSchema]
});

var categorySchema = new mongoose.Schema({
    name: String,
    logo: String,
    business_list: [businessSchema],
});






module.exports = mongoose.model('categories', categorySchema);