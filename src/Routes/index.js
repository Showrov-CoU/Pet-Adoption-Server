const express = require("express");
const getAllCategory = require("../api/AllCategory/controller/getAllCategory");
const getAllPets = require("../api/AllPets/Controller/getAllPets");
const getAllDonations = require("../api/AllDonation/Controller'/getAllDonation");
const getSinglePet = require("../api/GetSinglePet/GetSinglePet");
const getSingleDonation = require("../api/GetSingleDonation/GetSingleDonation");
const controlAdoption = require("../api/controlAdoption");
const controlMyDonation = require("../api/controlMyDonation");
const controlUsers = require("../api/controlUsers");
const getUsers = require("../api/Dashboard/Admin/getUsers");
const deleteUser = require("../api/Dashboard/Admin/deleteUser");
const patchUser = require("../api/Dashboard/Admin/patchUser");
const jwt = require("jsonwebtoken");
const allusers = require("../Models/AllUsers");
const allpets = require("../Models/AllPet");
const addedPet = require("../api/Dashboard/addedPet");
const mypets = require("../api/Dashboard/mypets");
const deletePet = require("../api/Dashboard/deletePet");
const makeAdopt = require("../api/Dashboard/makeadopt");
const updatePet = require("../api/Dashboard/updatePet");
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

const verifyAdmin = async (req, res, next) => {
  const email = req.decoded.email;
  const query = { email: email };
  const user = await allusers.findOne(query);
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

router.get("/categories", getAllCategory);
router.get("/pets", getAllPets);
router.get("/donations", getAllDonations);
router.get("/petDetails/:id", getSinglePet);
router.get("/donation/:id", getSingleDonation);
router.get("/users", verifyToken, verifyAdmin, getUsers);

router.get("/users/admin/:email", verifyToken, async (req, res) => {
  const email = req.params.email;
  if (email !== req.decoded.email) {
    return res.status(403).send({ message: "forbidden" });
  }

  const query = { email: email };

  const user = await allusers.findOne(query);

  let admin = false;
  if (user) {
    admin = user?.role === "admin";
  }
  // console.log(admin);
  res.send({ admin });
});

router.get("/mypet/:email", mypets);

router.post("/adoption", controlAdoption);
router.post("/mydonation", controlMyDonation);
router.post("/users", controlUsers);
// dashboad request
router.post("/addpet", addedPet);
// delete myaddpet
router.delete("/myPet/:id", deletePet);
// admin delete user
router.delete("/users/:id", verifyToken, verifyAdmin, deleteUser);
// admin make others user to admin
router.patch("/users/admin/:id", verifyToken, verifyAdmin, patchUser);
// my added pet can be changed adopted status
router.patch("/makeadopt/:id", makeAdopt);
// update pet
router.patch("/updatepet/:id", updatePet);

module.exports = router;
