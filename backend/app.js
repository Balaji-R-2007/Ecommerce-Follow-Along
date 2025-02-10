const express = require("express");
const path = require("path");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/error");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/products', express.static(path.join(__dirname, 'products')));

const user = require("./controller/user");
const product = require('./controller/product');

app.use("/api/v2/user", user);
app.use("/api/v2/product", product);

app.use(ErrorHandler);

module.exports = app;