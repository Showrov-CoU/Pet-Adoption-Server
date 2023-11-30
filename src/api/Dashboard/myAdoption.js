const myadoption = require("../../Models/AdoptionPets");

const myAdoption = async (req, res) => {
  try {
    const result = await myadoption.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = myAdoption;
