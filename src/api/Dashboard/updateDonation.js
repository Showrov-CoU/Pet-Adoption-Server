const { default: mongoose } = require("mongoose");
const donations = require("../../Models/Donation");

const updateDonation = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;

    const filter = { _id: new mongoose.Types.ObjectId(id) };

    const upDateDoc = {
      $set: {
        category: data.category,
        name: data.name,
        image: data.image,
        Dname: data.Dname,
        maxAmount: data.maxAmount,
        donatedAmount: data.donatedAmount,
        shortDesc: data.shortDesc,
        longDesc: data.longDesc,
      },
    };
    const result = await donations.updateOne(filter, upDateDoc);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateDonation;
