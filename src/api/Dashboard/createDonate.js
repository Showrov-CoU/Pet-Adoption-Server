const donations = require("../../Models/Donation");

const createDonate = async (req, res) => {
  try {
    const newcreatedonation = new donations(req.body);
    const result = await newcreatedonation.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = createDonate;
