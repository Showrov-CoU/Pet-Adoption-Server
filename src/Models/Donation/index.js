const { default: mongoose } = require("mongoose");

const donationSchema = mongoose.Schema({
  image: String,
  name: String,
  category: String,

  maxAmount: Number,
  donatedAmount: Number,

  shortDesc: String,
  LongDesc: String,
});

const donations = new mongoose.model("donations", donationSchema);

module.exports = donations;
