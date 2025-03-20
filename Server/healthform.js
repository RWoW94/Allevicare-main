// Initialize Mongoose
const mongoose = require("mongoose");

// Define HealthForm schema
const HealthFormSchema = new mongoose.Schema({
  socialnumber: { 
    type: String, ref: "User", 
    required: true,
    minlength: 10,
    maxlength: 12
  },
    healthTitle: { type: String, required: true },
    healthInfo: { type: String, required: false },
    level: { type: Number, required: false, min: 0, max: 5 },
  }, { versionKey: false });
  
  // Export the HealthForm model
  module.exports = mongoose.model("HealthForm", HealthFormSchema);