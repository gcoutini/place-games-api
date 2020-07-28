const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('user', UserSchema);