const routers = require("express").Router();
const registerController = require("../controllers/registerController");

routers.post("/register", registerController);

module.exports = routers;
