const express = require("express");
const User = require("../model/user");
const { isAuthenticated } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsynErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();

// Add product to wishlist
router.post("/add", isAuthenticated, catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.body;
  
  // Check if product already in wishlist
  const user = await User.findById(req.user._id);
  
  const isProductInWishlist = user.wishlist.includes(productId);
  
  if (isProductInWishlist) {
    return next(new ErrorHandler("Product already in wishlist", 400));
  }
  
  // Add to wishlist
  await User.findByIdAndUpdate(
    req.user._id,
    { $push: { wishlist: productId } },
    { new: true }
  );
  
  res.status(200).json({
    success: true,
    message: "Product added to wishlist",
  });
}));

// Remove product from wishlist
router.delete("/remove/:productId", isAuthenticated, catchAsyncErrors(async (req, res, next) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { $pull: { wishlist: req.params.productId } },
    { new: true }
  );
  
  res.status(200).json({
    success: true,
    message: "Product removed from wishlist",
  });
}));

// Get wishlist
router.get("/", isAuthenticated, catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user._id)
    .populate("wishlist");
  
  res.status(200).json({
    success: true,
    wishlist: user.wishlist,
  });
}));

module.exports = router;