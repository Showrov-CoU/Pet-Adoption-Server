const pets = require("../../../Models/Pet");

const getAllPets = async (req, res) => {
  try {
    const pets = await pets.find();
    res.send(pets);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllPets;
