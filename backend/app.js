const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Install these packages:
// 

const app = express();

// Set security HTTP headers
app.use(helmet());

// Body parser
app.use(express.json({ limit: '10kb' }));

// Cookie parser
app.use(cookieParser());
~
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later'
});
app.use('/api', limiter);

// CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Routes
app.use('/api/v2/user', require('./controller/user'));
app.use('/api/v2/product', require('./controller/product'));
// Add other routes

// Error handling middleware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;