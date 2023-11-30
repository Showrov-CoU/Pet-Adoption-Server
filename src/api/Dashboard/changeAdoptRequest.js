const { default: mongoose } = require("mongoose");
const myAdoption = require("./myAdoption");
const myadoption = require("../../Models/AdoptionPets");

const changeAdoptRequest = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);

    const filter = { _id: new mongoose.Types.ObjectId(id) };
    // console.log(filter);
    const upDateDoc = {
      $set: {
        adoptionRequest: true,
      },
    };
    const result = await myadoption.updateOne(filter, upDateDoc);

    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = changeAdoptRequest;
