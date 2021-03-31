const userRouter = require('./user');
const customerRouter = require('./customer');
const gameRouter = require('./game');

module.exports = [
    userRouter,
    customerRouter,
    gameRouter
]