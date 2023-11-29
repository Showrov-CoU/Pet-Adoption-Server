const { default: mongoose } = require("mongoose");
const allpets = require("../../Models/AllPet");

const deletePet = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await allpets.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = deletePet;
