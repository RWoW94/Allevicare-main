const mongoose = require("mongoose");

const HealthInfoSchema = new mongoose.Schema({
    username: { type: String, ref: "User", required: true},
    infoId: { type: Number, required: true, unique: true, index: true }, 
    illness: { type: String, required: true },
    description: { type: String, required: true },
    medication: { type: String, required: true },
  }, { versionKey: false });
  
  
  module.exports = mongoose.model("HealthInfo", HealthInfoSchema);