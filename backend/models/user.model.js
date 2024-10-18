const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  repassword: { type: String, required: true },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = { UserModel };
