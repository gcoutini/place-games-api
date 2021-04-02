const mongoose = require('mongoose');
const RentSchema = new mongoose.Schema({
    client: {
        type: String,
        require: true
    },
    cpf: {
      type: String,
      require: true
    },
    title: {
        type: String,
        require: true
    },
    rent_date: {
      type: String,
      require: true
    },
    return_date: {
      type: String,
      require: true
    },
    rental_days: {
      type: Number,
      require: true
    },
    price: {
      type: Number,
      require: true
    }
});

module.exports = mongoose.model('rent', RentSchema);