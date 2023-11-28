const express = require("express");
const getAllCategory = require("../../api/AllCategory/controller/getAllCategory");
const getAllPets = require("../../api/AllPets/Controller/getAllPets");
const getAllDonations = require("../../api/AllDonation/Controller'/getAllDonation");
const getSinglePet = require("../../api/GetSinglePet/GetSinglePet");
const getSingleDonation = require("../../api/GetSingleDonation/GetSingleDonation");
const controlAdoption = require("../../api/controlAdoption");
const router = express.Router();

router.get("/categories", getAllCategory);
router.get("/pets", getAllPets);
router.get("/donations", getAllDonations);
router.get("/petDetails/:id", getSinglePet);
router.get("/donation/:id", getSingleDonation);

router.post("/adoption", controlAdoption);
// router.post("/users");

module.exports = router;
