const Jugador=require("../models/Jugador.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");


const createJugador = async (req, res, next) => {
    try {
        const newJugador = new Jugador();
        newJugador.name = req.body.name;
        newJugador.team = req.body.team;
        newJugador.image = req.body.image;
        newJugador.year = req.body.year;
        const JugadorDb = await newJugador.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { jugador: JugadorDb.name }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllJugador = async (req, res, next) => {
    try {

            const jugador = await Jugador.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { jugador:jugador }
            });
        } catch (error) {
        return next(error)
    }
}


const getJugadorById = async (req, res, next) => {
    try {
        const { jugadorId } = req.params;
        const jugadorById = await Jugador.findById(jugadorId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { jugador: jugadorById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports={getJugadorById,getAllJugador,createJugador};