const cors = require("cors");
const express = require("express");
const { LOCAL_CLIENT } = require("../config/default");

const applyMiddleware = (app) => {
  app.use(
    cors({
      origin: [
        // "http://localhost:5173/",
        // // "http://localhost:5173/",
        // // "http://localhost:5173/",
        LOCAL_CLIENT,
      ],
      credentials: true,
    })
  );
  app.use(express.json());
};

module.exports = applyMiddleware;
