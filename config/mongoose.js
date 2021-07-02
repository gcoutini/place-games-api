const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/place-games', { useNewUrlParser: true});
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function() {
        console.log("Sucesso");
    })
};