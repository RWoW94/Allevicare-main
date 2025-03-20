// Initialize Mongoose
const mongoose = require("mongoose");

// Define HealthInfo schema
const HealthInfoSchema = new mongoose.Schema({
  socialnumber: { 
    type: String, ref: "User", 
    required: true,
    minlength: 10,
    maxlength: 12
  },
    illness: { type: String, required: true },
    description: { type: String, required: true },
    medication: { type: String, required: true },
  }, { versionKey: false });
  
  // Export the HealthInfo model
  module.exports = mongoose.model("HealthInfo", HealthInfoSchema);