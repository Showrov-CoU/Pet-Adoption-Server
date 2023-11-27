const express = require("express");
const getAllCategory = require("../../api/AllCategory/controller/getAllCategory");
const getAllPets = require("../../api/AllPets/Controller/getAllPets");
const getAllDonations = require("../../api/AllDonation/Controller'/getAllDonation");
const router = express.Router();

router.get("/categories", getAllCategory);
router.get("/pets", getAllPets);
router.get("/donations", getAllDonations);

module.exports = router;
