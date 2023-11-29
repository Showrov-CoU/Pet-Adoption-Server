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
const petchUser = require("../../api/Dashboard/Admin/patchUser");
const router = express.Router();

router.get("/categories", getAllCategory);
router.get("/pets", getAllPets);
router.get("/donations", getAllDonations);
router.get("/petDetails/:id", getSinglePet);
router.get("/donation/:id", getSingleDonation);
router.get("/users", getUsers);

router.post("/adoption", controlAdoption);
router.post("/mydonation", controlMyDonation);
router.post("/users", controlUsers);

router.delete("/users/:id", deleteUser);

router.patch("users/admin/:id", petchUser);

module.exports = router;
