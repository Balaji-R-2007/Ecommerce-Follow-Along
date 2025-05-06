const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsynErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const Order = require("../model/order");
const Product = require("../model/product");
const User = require("../model/user");
const router = express.Router();

// Get all users (admin only)
router.get("/users", isAuthenticated, isAdmin, catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();
  
  res.status(200).json({
    success: true,
    users,
  });
}));

// Get all orders (admin only)
router.get("/orders", isAuthenticated, isAdmin, catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find()
    .populate("user", "name email");
  
  res.status(200).json({
    success: true,
    orders,
  });
}));

// Update order status (admin only)
router.put("/order/:id", isAuthenticated, isAdmin, catchAsyncErrors(async (req, res, next) => {
  const { status } = req.body;
  
  const order = await Order.findById(req.params.id);
  
  if (!order) {
    return next(new ErrorHandler("Order not found", 404));
  }
  
  order.status = status;
  await order.save();
  
  res.status(200).json({
    success: true,
    message: "Order status updated successfully",
  });
}));

// Get dashboard stats (admin only)
router.get("/stats", isAuthenticated, isAdmin, catchAsyncErrors(async (req, res, next) => {
  const userCount = await User.countDocuments();
  const productCount = await Product.countDocuments();
  const orderCount = await Order.countDocuments();
  
  // Calculate total revenue
  const orders = await Order.find();
  const totalRevenue = orders.reduce((acc, order) => {
    return acc + order.totalAmount;
  }, 0);
  
  res.status(200).json({
    success: true,
    stats: {
      users: userCount,
      products: productCount,
      orders: orderCount,
      totalRevenue,
    },
  });
}));

module.exports = router;