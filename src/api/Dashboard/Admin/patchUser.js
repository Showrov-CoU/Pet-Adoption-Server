const { default: mongoose } = require("mongoose");
const allusers = require("../../../Models/AllUsers");

const patchUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const filter = { _id: new mongoose.Types.ObjectId(id) };
    console.log(filter);
    const upDateDoc = {
      $set: {
        role: "admin",
      },
    };
    const result = await allusers.updateOne(filter, upDateDoc);

    res.send(result);
  } catch (error) {}
};
module.exports = patchUser;
