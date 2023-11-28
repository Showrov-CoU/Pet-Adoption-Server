const mongoose = require("mongoose");

const adoptionSchema = mongoose.Schema({
  name: String,
  petid: String,
  emai: String,
  phone: String,
  address: String,
});

const myadoption = new mongoose.model("myadoption", adoptionSchema);

module.exports = myadoption;
