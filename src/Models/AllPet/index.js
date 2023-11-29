const mongoose = require("mongoose");

const petSchema = mongoose.Schema({
  category: String,
  email:String,
  name: String,
  image: String,
  location: String,
  age: Number,
  shortDesc: String,
  LongDesc: String,
  date: String,
  time: String,
  adopted: Boolean,
});

const allpets = new mongoose.model("allpets", petSchema);

module.exports = allpets;
