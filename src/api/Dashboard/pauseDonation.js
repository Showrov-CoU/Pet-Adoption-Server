const { default: mongoose } = require("mongoose");
const donations = require("../../Models/Donation");

const pauseDonation = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const filter = { _id: new mongoose.Types.ObjectId(id) };
    // console.log(filter);
    const upDateDoc = {
      $set: {
        pause: true,
      },
    };
    const result = await donations.updateOne(filter, upDateDoc);

    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = pauseDonation;
