const express = require("express");
const router = express.Router();

const {  createEquipo, getAllEquipos  } = require("../controllers/equipo.controller");

router.post("/create", createEquipo);
router.get("/", getAllEquipos);

module.exports = router;