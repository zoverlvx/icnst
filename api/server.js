const express = require("express");
const configureServer = require("../config/configureServer.js");

const server = express();

configureServer(server);

server.get("/", (req, res) => {
    res.status(200).send("This is ICNST");
});

module.exports = server;
