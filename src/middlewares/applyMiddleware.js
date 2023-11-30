const cors = require("cors");
const express = require("express");
const {
  LOCAL_CLIENT,
  MAIN_DEPLOY_LINK,
  ANOTHER_LINK,
} = require("../config/default");

const applyMiddleware = (app) => {
  app.use(
    cors({
      origin: ["http://localhost:5173", "https://pet-adoption-2a603.web.app"],
      credentials: true,
    })
  );
  app.use(express.json());
};

module.exports = applyMiddleware;
