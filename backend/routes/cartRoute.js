const {
  addToCart,
  updateCart,
  getUserCart,
} = require("../controllers/cartController");
const authUser = require("../middleware/auth");

const Router = require("express").Router();

Router.post("/get", authUser, getUserCart);
Router.post("/add", authUser, addToCart);
Router.post("/update", authUser, updateCart);

module.exports = Router;
