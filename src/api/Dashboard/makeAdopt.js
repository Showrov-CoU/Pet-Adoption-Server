const { default: mongoose } = require("mongoose");
const allpets = require("../../Models/AllPet");

const makeAdopt = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const filter = { _id: new mongoose.Types.ObjectId(id) };
    // console.log(filter);
    const upDateDoc = {
      $set: {
        adopted: true,
      },
    };
    const result = await allpets.updateOne(filter, upDateDoc);

    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};
 module.exports = makeAdopt;