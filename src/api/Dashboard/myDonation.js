const mydonations = require("../../Models/MyDonation/MyDonation");

const myDonation = async (req, res) => {
  try {
    const email = req.params.email;
    console.log(email);
    const result = await mydonations.find({ email: email });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = myDonation;
