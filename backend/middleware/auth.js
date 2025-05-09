const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsynErrors");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  
  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret");
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
});

exports.isAdmin = catchAsyncErrors(async (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new ErrorHandler("Only admin can access this resource", 403));
  }
  next();
});