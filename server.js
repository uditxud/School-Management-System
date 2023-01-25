// server create
const express = require("express");
const app = express();

//dotenv (to hide personal credentials, configs, urls)
const dotenv = require("dotenv");
dotenv.config();

//database create
const mongoose = require("mongoose");

mongoose.connect(
    process.env.dbConnect,
    () => console.log("connected to db")
);
 
// server run
app.listen(4000, () => console.log("server running"));



 
