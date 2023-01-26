// server create
const express = require("express");
const app = express();

//dotenv (to hide personal credentials, configs, urls)
const dotenv = require("dotenv");
dotenv.config();

//database create
const mongoose = require("mongoose");

mongoose.connect(
    process.env.dbConnect,{useNewUrlParser: true,
        useUnifiedTopology: true,},
    () => console.log("connected to db")
);

//to get and post data in json format
app.use(express.json());

//import routes
const studentRoutes = require('./routes/router');
app.use("/api/students", studentRoutes);
 
// server run
app.listen(4000, () => console.log("server running"));



 
