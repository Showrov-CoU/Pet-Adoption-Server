const { default: mongoose } = require("mongoose");
const donations = require("../../Models/Donation");

const getSingleDonation = async (req, res) => {
  try {
    const id = req.params.id;
    const donation = await donations.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.send(donation);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getSingleDonation;
