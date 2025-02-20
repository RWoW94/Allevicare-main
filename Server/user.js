const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: false }, // 👈 Lägg till
  number: { type: String, required: false }, // 👈 Lägg till
  address: { type: String, required: false }
});

module.exports = mongoose.model("User", UserSchema);

