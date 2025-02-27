const mongoose = require("mongoose");

const HealthFormSchema = new mongoose.Schema({
    userId: { type: String, ref: "User", required: true },
    healthTitle: { type: String, required: true },
    healthInfo: { type: String, required: false },
    level: { type: Number, required: false, min: 1, max: 5 },
    boolean: { type: Boolean, required: false },
  }, { versionKey: false });
  
  
  module.exports = mongoose.model("HealthForm", HealthFormSchema);