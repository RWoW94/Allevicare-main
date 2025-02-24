const mongoose = require("mongoose");

const HealthFormSchema = new mongoose.Schema({
    username: { type: String, ref: "User", required: true, trim: true},
    healthId: { type: Number, required: true }, 
    healthInfo: { type: String, required: true },
    level: { type: Number, required: true, min: 1, max: 5 },
  }, { versionKey: false });
  
  
  module.exports = mongoose.model("HealthForm", HealthFormSchema);