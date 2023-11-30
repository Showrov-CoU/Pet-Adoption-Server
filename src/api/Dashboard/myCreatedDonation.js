const donations = require("../../Models/Donation");

const myCreatedDonation = async (req, res) => {
  try {
    const email = req.params.email;

    const result = await donations.find({ email: email });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = myCreatedDonation;
