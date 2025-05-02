const express = require("express");
const Review = require("../model/review");
const Product = require("../model/product");
const { isAuthenticated } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsynErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();

// Create or update review
router.post("/create", isAuthenticated, catchAsyncErrors(async (req, res, next) => {
  const { productId, rating, comment } = req.body;
  
  // Create review object
  const review = {
    user: req.user._id,
    product: productId,
    rating: Number(rating),
    comment,
  };
  
  // Check if product exists
  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  
  // Check if user already reviewed this product
  const existingReview = await Review.findOne({ 
    user: req.user._id, 
    product: productId 
  });
  
  if (existingReview) {
    // Update existing review
    existingReview.rating = rating;
    existingReview.comment = comment;
    await existingReview.save();
    
    res.status(200).json({
      success: true,
      message: "Review updated successfully",
    });
  } else {
    // Create new review
    await Review.create(review);
    
    res.status(201).json({
      success: true,
      message: "Review added successfully",
    });
  }
}));

// Get product reviews
router.get("/:productId", catchAsyncErrors(async (req, res, next) => {
  const reviews = await Review.find({ product: req.params.productId })
    .populate("user", "name avatar");
  
  res.status(200).json({
    success: true,
    reviews,
  });
}));

module.exports = router;