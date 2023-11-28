const mongoose = require("mongoose");

const adoptionSchema = mongoose.Schema({
  name: String,
  userImage: String,
  petid: String,
  petName:String,
  image:String,
  email: String,
  phone: String,
  address: String,
});

const myadoption = new mongoose.model("myadoption", adoptionSchema);

module.exports = myadoption;
