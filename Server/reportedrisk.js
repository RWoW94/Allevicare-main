const mongoose = require("mongoose");

const reportedRiskSchema = new mongoose.Schema({
  socialnumber: { 
    type: String, ref: "User", 
    required: true,
    minlength: 10,
    maxlength: 12
  },
    name: { type: String, required: true },
    description: { type: String, required: true },
    level: { type: Number, required: true, min: 1, max: 5  },
  }, { versionKey: false });
  
  
  module.exports = mongoose.model("reportedRisk", reportedRiskSchema);