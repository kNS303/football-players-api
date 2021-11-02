const Equipo = require("../models/Equipo.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createEquipo = async (req, res, next) => {
    try {
        const newEquipo = new Equipo();
        newEquipo.name = req.body.name;
        newEquipo.city = req.body.city;
        newEquipo.image = req.body.image;
        newEquipo.jugadores = req.body.jugadores;
        const EquipoDb = await newEquipo.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { equipo: EquipoDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllEquipos = async (req, res, next) => {
    try {
        const Equipos = await Equipos.find().populate("equipos");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { equipos: equipos }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createEquipo, getAllEquipos }