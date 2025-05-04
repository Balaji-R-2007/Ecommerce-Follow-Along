const express = require("express");
const Coupon = require("../model/coupon");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsynErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();

// Create coupon (admin only)
router.post("/create", isAuthenticated, isAdmin, catchAsyncErrors(async (req, res, next) => {
  const { code, discount, minAmount, maxDiscount, startDate, endDate } = req.body;
  
  const coupon = await Coupon.create({
    code,
    discount,
    minAmount,
    maxDiscount,
    startDate,
    endDate,
  });
  
  res.status(201).json({
    success: true,
    coupon,
  });
}));

// Validate coupon
router.post("/validate", isAuthenticated, catchAsyncErrors(async (req, res, next) => {
  const { code, cartAmount } = req.body;
  
  const coupon = await Coupon.findOne({ 
    code, 
    active: true,
    startDate: { $lte: new Date() },
    endDate: { $gte: new Date() },
  });
  
  if (!coupon) {
    return next(new ErrorHandler("Invalid or expired coupon", 400));
  }
  
  // Check minimum cart amount
  if (cartAmount < coupon.minAmount) {
    return next(new ErrorHandler(`Minimum cart amount should be ₹${coupon.minAmount}`, 400));
  }
  
  // Calculate discount amount
  let discountAmount = (cartAmount * coupon.discount) / 100;
  
  // Apply maximum discount limit if applicable
  if (coupon.maxDiscount && discountAmount > coupon.maxDiscount) {
    discountAmount = coupon.maxDiscount;
  }
  
  res.status(200).json({
    success: true,
    coupon,
    discountAmount,
    finalAmount: cartAmount - discountAmount,
  });
}));

module.exports = router;