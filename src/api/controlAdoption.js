const myadoption = require("../Models/AdoptionPets");

const controlAdoption = async (req, res) => {
  try {
    const newmyadoption = new myadoption(req.body);
    const result = await newmyadoption.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = controlAdoption;
