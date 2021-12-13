var mongoose = require('mongoose');

const trendingSchema = new mongoose.Schema({
    trending: String,
    tweets: String,
});

module.exports = mongoose.model('trending', trendingSchema)