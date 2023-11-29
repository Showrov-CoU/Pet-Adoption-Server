const allusers = require("../Models/AllUsers");

const controlUsers = async (req, res) => {
  try {
    const user = req.body;
    const query = { email: user.email };

    const existingUser = await allusers.findOne(query);
    if (existingUser) {
      return res.send({ message: "User Already exist" });
    }

    const newallusers = new allusers(user);
    const result = await newallusers.save();
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
    console.log(error.message);
  }
};

module.exports = controlUsers;
