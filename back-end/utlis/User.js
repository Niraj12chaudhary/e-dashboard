const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String // 'String' with an uppercase 'S'
});

module.exports = mongoose.model("User", userSchema);
