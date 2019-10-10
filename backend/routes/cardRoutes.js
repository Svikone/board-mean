const express = require("express");
const Controller = require("../controller/cardController");
const Router = express.Router();

Router.post("/create", Controller.create);
module.exports = Router;