const { default: mongoose } = require("mongoose");

const petSchema = mongoose.Schema({
  category: String,
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

const pets = new mongoose.model("pets", petSchema);

module.exports = pets;
