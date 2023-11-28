const allpets = require("../../../Models/Pet");

const getAllPets = async (req, res) => {
  try {
    const query = {};
    if (req.query.category) {
      query["category"] = req.query.category;
      console.log(query);
    } else {
      console.log(query);
    }
    const pets = await allpets.find(query);
    res.send(pets);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllPets;
