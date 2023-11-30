const { default: mongoose } = require("mongoose");

const donationSchema = mongoose.Schema({
  image: String,
  email: String,
  Dname: String,
  name: String,
  category: String,
  date: String,

  maxAmount: Number,
  donatedAmount: Number,

  shortDesc: String,
  LongDesc: String,
  date: String,
  time: String,
});

const donations = new mongoose.model("donations", donationSchema);

module.exports = donations;
