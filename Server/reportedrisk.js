const mongoose = require("mongoose");

const reportedRiskSchema = new mongoose.Schema({
    username: { type: String, ref: "User", required: true},
    riskId: { type: Number, required: true, unique: true }, 
    name: { type: String, required: true },
    description: { type: String, required: true },
    level: { type: Number, required: true, min: 1, max: 5  },
  }, { versionKey: false });
  
  
  module.exports = mongoose.model("reportedRisk", reportedRiskSchema);