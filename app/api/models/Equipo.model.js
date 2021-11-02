const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EquipoSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    image: { type: String, required: true },
    jugadores: [{ type: Schema.Types.ObjectId, ref: "jugador", required: true }]
});

const Equipo = mongoose.model("equipo", EquipoSchema);
module.exports = Equipo;