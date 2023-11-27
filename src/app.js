const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connection");

require("dotenv").config();

const categoryRoute = require("./Routes/Category/index");

const app = express();
const port = process.env.PORT || 5000;

applyMiddleware(app);

app.use(categoryRoute);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.all("*", (req, res, next) => {
  const error = new Error(`The requested url [${req.url}] is not valid`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message,
  });
});

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on port ${port}`);
});
