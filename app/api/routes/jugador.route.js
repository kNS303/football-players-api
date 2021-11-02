const express = require("express");
const router = express.Router();
const { isAuth } = require("../../../middlewares/auth.middleware");


const{getJugadorById,getAllJugador,createJugador}=require("../controllers/jugador.controller");

router.post("/create",[isAuth], createJugador);
router.get("/", getAllJugador);
router.get("/:jugadorId",[isAuth], getJugadorById);

module.exports = router;