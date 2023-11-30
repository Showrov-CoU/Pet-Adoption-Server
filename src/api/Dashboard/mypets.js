const allpets = require("../../Models/AllPet");

const mypets = async (req, res) => {
  try {
    const email = req.params.email;

    const result = await allpets.find({ email: email });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mypets;
