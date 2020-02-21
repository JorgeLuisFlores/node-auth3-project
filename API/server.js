const express = require("express");
const configMiddleware = require('../Middleware/configMiddleware.js');
const server = express();
const apiRouter = require('./apiRouter.js');

configMiddleware(server);

server.use('/api', apiRouter);


module.exports = server;