const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    state: String,
    address: String,
    rollNumber: Number,
    fee: Number
});

module.exports = mongoose.model("Product", studentSchema);