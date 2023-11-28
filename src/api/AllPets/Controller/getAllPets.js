const allpets = require("../../../Models/AllPet");

const getAllPets = async (req, res) => {
  try {
    const query = {};
    if (req.query.category) {
      query["category"] = req.query.category;
    }
    const pets = await allpets.find(query).sort({ date: "desc" });
    res.send(pets);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllPets;
