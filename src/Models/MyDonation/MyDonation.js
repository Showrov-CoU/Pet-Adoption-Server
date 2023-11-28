const { default: mongoose } = require("mongoose");

const mydonationSchema = mongoose.Schema({
  name: String,
  userImage: String,
  amount: Number,
  petName: String,
  Dname: String,
  image: String,
});

const mydonations = new mongoose.model("mydonations", mydonationSchema);

module.exports = mydonations;
