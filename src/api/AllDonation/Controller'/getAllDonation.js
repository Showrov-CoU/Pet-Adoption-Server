const donations = require("../../../Models/Donation");

const getAllDonations = async (req, res) => {
  try {
    console.log("jdsjkkfskfjskjfskfj");
    const donation = await donations.find();

    res.send(donation);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllDonations;
