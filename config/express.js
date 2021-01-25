const express = require('express');
const session = require('express-session');
const mongoose = require('./mongoose');
const app = express();
const cors = require('cors');
const router = require('../resources/routes')
const bodyparser = require('body-parser');

// for body parser
app.use(express.urlencoded( { extended : false}));
app.use(bodyparser.json());

//session
app.use(session({
    secret: 'youtube_video',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));

mongoose();

app.use(cors())
// routers
app.use(router);

// errors: page not found 404
app.use((req, res, next) =>  {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
})

// Handling errors (send them to the client)
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});

// setting up the server

module.exports = app;