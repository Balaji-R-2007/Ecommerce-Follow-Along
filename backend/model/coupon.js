const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "Please enter coupon code"],
    unique: true,
    uppercase: true,
  },
  discount: {
    type: Number,
    required: [true, "Please enter discount percentage"],
    min: 0,
    max: 100,
  },
  minAmount: {
    type: Number,
    default: 0,
  },
  maxDiscount: {
    type: Number,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: [true, "Please enter coupon expiry date"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Coupon", couponSchema);