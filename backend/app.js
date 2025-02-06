const express = require("express")
const app = express();
const ErrorHandler = require("./middleware/error")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/",express.static("uploads"))
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}))
if(process.env.NODE_ENV !== "PRODUCTON"){
    require("dotenv").config({
        path: "backend/config/.env"
    })
}
const user = require("./controller/user");
const product = require("./controller/product");
app.use("/api/v2/product",product);
app.use("/api/v2/user",user);
app.use(ErrorHandler);
module.exports=app;