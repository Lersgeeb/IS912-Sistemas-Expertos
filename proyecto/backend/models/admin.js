var mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
    token: String,
});

module.exports = mongoose.model('admins', AdminSchema)