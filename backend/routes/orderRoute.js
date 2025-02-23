const Router = require("express").Router();
const {
  placeOrder,
  placeOrdersStripe,
  placeOrdersRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} = require("../controllers/orderController");
const adminAuth = require("../middleware/adminAuth");
const authUser = require("../middleware/auth");

// Admin Features
Router.post("/list", adminAuth, allOrders);
Router.post("/status", adminAuth, updateStatus);

// Payment Features
Router.post("/place", authUser, placeOrder);
Router.post("/stripe", authUser, placeOrdersStripe);
Router.post("/razorpay", authUser, placeOrdersRazorpay);

// User Feature
Router.post("/userorders", authUser, userOrders);

module.exports = Router;
