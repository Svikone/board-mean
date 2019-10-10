const express = require("express");
const Controller = require("../controller/userController");
const homeRouter = express.Router();


homeRouter.post("/signup", Controller.signup);
homeRouter.post("/signin", Controller.signin);
homeRouter.post("/getAll", Controller.getAll);
module.exports = homeRouter;