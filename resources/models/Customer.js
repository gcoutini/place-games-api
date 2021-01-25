const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true
    },
    birth_date: {
        type: String,
    },
    tel: {
        type: String,
    },
    cel: {
        type: String,
    },
    email: {
        type: String,
    }
});

module.exports = mongoose.model('customer', CustomerSchema);