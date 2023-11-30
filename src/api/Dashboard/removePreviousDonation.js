const { default: mongoose } = require("mongoose");
const mydonations = require("../../Models/MyDonation/MyDonation");

const removePreviousDonation = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await mydonations.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = removePreviousDonation;
