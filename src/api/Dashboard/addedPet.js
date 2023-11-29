const allpets = require("../../Models/AllPet");

const addedPet = async (req, res) => {
  try {
    const newAddPet = new allpets(req.body);
    const result = await newAddPet.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = addedPet;
