const Router = require("express").Router();
const {
  loginUser,
  registerUser,
  adminLogin,
} = require("../controllers/userController");

Router.post("/register", registerUser);
Router.post("/login", loginUser);
Router.post("/admin", adminLogin);
module.exports = Router;
