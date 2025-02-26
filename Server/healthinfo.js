const mongoose = require("mongoose");

const HealthInfoSchema = new mongoose.Schema({
    userId: { type: String, ref: "User", required: true },
    illness: { type: String, required: true },
    description: { type: String, required: true },
    medication: { type: String, required: true },
  }, { versionKey: false });
  
  
  module.exports = mongoose.model("HealthInfo", HealthInfoSchema);