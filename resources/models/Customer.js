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
    },
    cep: {
        type: String,
    },
    logradouro: {
        type: String,
    },
    house_number: {
        type: String,
    },
    complement: {
        type: String,
    },
    bairro: {
        type: String,
    },
    localidade: {
        type: String,
    },
    uf: {
        type: String,
    }


});

module.exports = mongoose.model('customer', CustomerSchema);