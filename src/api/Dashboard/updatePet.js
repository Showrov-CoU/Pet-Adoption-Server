const { default: mongoose } = require("mongoose");
const allpets = require("../../Models/AllPet");

const updatePet = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    // console.log(id);
    // console.log(data);
    const filter = { _id: new mongoose.Types.ObjectId(id) };

    const upDateDoc = {
      $set: {
        category: data.category,
        name: data.name,
        image: data.image,
        location: data.location,
        age: data.age,
        shortDesc: data.shortDesc,
      },
    };
    const result = await allpets.updateOne(filter, upDateDoc);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updatePet;
