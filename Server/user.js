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