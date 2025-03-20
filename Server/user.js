// Initialize Mongoose
const mongoose = require("mongoose");

// Define User schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true }, 
  phone: { type: String, required: true }, 
  address: { type: String, required: false },
  zipcode: { type: Number, require: false },
  socialnumber: { 
    type: String, 
    required: true,
    minlength: 10,
    maxlength: 12
  } 
}, { versionKey: false });

// Export the User model
module.exports = mongoose.model("User", UserSchema);