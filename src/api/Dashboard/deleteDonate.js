const { default: mongoose } = require("mongoose");
const donations = require("../../Models/Donation");

const deleteDonate = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await donations.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = deleteDonate;
