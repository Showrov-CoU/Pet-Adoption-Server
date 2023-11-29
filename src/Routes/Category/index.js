const express = require("express");
const getAllCategory = require("../../api/AllCategory/controller/getAllCategory");
const getAllPets = require("../../api/AllPets/Controller/getAllPets");
const getAllDonations = require("../../api/AllDonation/Controller'/getAllDonation");
const getSinglePet = require("../../api/GetSinglePet/GetSinglePet");
const getSingleDonation = require("../../api/GetSingleDonation/GetSingleDonation");
const controlAdoption = require("../../api/controlAdoption");
const controlMyDonation = require("../../api/controlMyDonation");
const controlUsers = require("../../api/controlUsers");
const getUsers = require("../../api/Dashboard/Admin/getUsers");
const deleteUser = require("../../api/Dashboard/Admin/deleteUser");
const patchUser = require("../../api/Dashboard/Admin/patchUser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.post("/jwt", async (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1hr",
    });

    res.send({ token });
  } catch (error) {
    console.log(error.message);
  }
});

const verifyToken = async (req, res, next) => {
  //   console.log("inside verify token", req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }

    req.decoded = decoded;
    next();
  });
};

router.get("/categories", getAllCategory);
router.get("/pets", getAllPets);
router.get("/donations", getAllDonations);
router.get("/petDetails/:id", getSinglePet);
router.get("/donation/:id", getSingleDonation);
router.get("/users", verifyToken, getUsers);

router.post("/adoption", controlAdoption);
router.post("/mydonation", controlMyDonation);
router.post("/users", controlUsers);

router.delete("/users/:id", deleteUser);

router.patch("/users/admin/:id", patchUser);

module.exports = router;
