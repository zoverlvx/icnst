const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.status(200).send("This is ICNST");
});

module.exports = server;
