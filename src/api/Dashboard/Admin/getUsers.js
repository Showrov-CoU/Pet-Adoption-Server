const allusers = require("../../../Models/AllUsers");

const getUsers = async (req, res) => {
  try {
    // const header = req.headers;
    // console.log(header);
    // console.log("Hello");
    const result = await allusers.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getUsers;
