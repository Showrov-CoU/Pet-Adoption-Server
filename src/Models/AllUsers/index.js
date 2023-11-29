const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
  role: String,
});

const allusers = new mongoose.model("allusers", userSchema);
module.exports = allusers;
