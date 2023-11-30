const { default: mongoose } = require("mongoose");

const mydonationSchema = mongoose.Schema({
  email: String,
  petName: String,
  Dname: String,
  image: String,
  amount: Number,
});

const mydonations = new mongoose.model("mydonations", mydonationSchema);

module.exports = mydonations;
