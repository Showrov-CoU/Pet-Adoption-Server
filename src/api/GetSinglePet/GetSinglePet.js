const { default: mongoose } = require("mongoose");
const allpets = require("../../Models/AllPet");

const getSinglePet = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await allpets.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = getSinglePet;
