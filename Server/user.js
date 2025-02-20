/* const mongoose = require("mongoose");

// Account Schema
const AccountSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { versionKey: false });

const Account = mongoose.model("Account", AccountSchema);

// HealthRisk Schema
const HealthRiskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
}, { versionKey: false });

const HealthRisk = mongoose.model("HealthRisk", HealthRiskSchema);

// User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: false },
  number: { type: String, required: false },
  address: { type: String, required: false },
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  healthRisks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HealthRisk' }]
}, { versionKey: false });

const User = mongoose.model("User", UserSchema);

module.exports = { User, Account, HealthRisk }; */



const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: false }, 
  number: { type: String, required: false }, 
  address: { type: String, required: false } 
}, { versionKey: false});


module.exports = mongoose.model("User", UserSchema);