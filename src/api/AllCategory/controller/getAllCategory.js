const mongoose = require("mongoose");
const petCategories = require("../../../Models/Category");

const getAllCategory = async (req, res) => {
  try {
    const categories = await petCategories.find();
    res.send(categories);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllCategory;
