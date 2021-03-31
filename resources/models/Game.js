const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    players_number: {
        type: String,
        require: true,
    },
    available: {
      type: Boolean,
      require: true
    }
});

module.exports = mongoose.model('game', GameSchema);