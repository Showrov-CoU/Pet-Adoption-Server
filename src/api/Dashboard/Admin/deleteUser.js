const { default: mongoose } = require("mongoose");
const allusers = require("../../../Models/AllUsers");

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await allusers.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = deleteUser;
