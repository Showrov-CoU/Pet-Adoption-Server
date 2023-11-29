const { default: mongoose } = require("mongoose");
const allusers = require("../../../Models/AllUsers");

const petchUser = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: new mongoose.Types.ObjectId(id) };
    const upDateDoc = {
      $set: {
        role: "admin",
      },
    };
    const result = await allusers.updateOne(filter, upDateDoc);

    res.send(result);
  } catch (error) {}
};
module.exports = petchUser;
