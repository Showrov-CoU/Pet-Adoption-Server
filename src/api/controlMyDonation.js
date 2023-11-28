const mydonations = require("../Models/MyDonation/MyDonation");

const controlMyDonation = async (req, res) => {
  try {
    const newMyDonation = new mydonations(req.body);
    const result = await newMyDonation.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = controlMyDonation;
