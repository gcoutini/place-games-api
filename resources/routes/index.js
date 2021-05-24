const userRouter = require('./user');
const customerRouter = require('./customer');
const gameRouter = require('./game');
const rentRouter = require('./rent');

module.exports = [
    userRouter,
    customerRouter,
    gameRouter,
    rentRouter
]