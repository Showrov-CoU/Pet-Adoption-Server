const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
});

const petCategories = new mongoose.model("petCategories", categorySchema);

module.exports = petCategories;
