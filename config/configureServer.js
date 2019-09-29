const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

module.exports = function(server) {
    server.use(helmet());
    server.use(cors());
    server.use(express.json());
}
