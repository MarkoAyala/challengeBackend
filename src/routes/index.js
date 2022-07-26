const { Router } =require("express");
const server = Router();
const textRouter = require('./textRoute.js');

server.use("/iecho", textRouter);

module.exports = server