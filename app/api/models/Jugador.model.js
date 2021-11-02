const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JugadorSchema = new Schema(
    {
        name: { type: String, require: true },
        team: { type: String, require: true },
        image: { type: String, require: true },
        year: { type: Number, require: true }
    },
    { timestamps: true }
);

const Jugador = mongoose.model("jugador", JugadorSchema);
module.exports = Jugador;