const mongoose = require("mongoose");
require("dotenv").config();

const getDbUrl = () => {
  let connectionUrl = process.env.DB_STRING;

  connectionUrl = connectionUrl.replace("<username>", process.env.DB_USER);
  connectionUrl = connectionUrl.replace("<password>", process.env.DB_PASS);
  //   console.log(connectionUrl);
  return connectionUrl;
};
const connectDB = async () => {
  try {
    const url = getDbUrl();
    await mongoose.connect(url, { dbName: process.env.DB_NAME });
    console.log("Connected to database...!!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
