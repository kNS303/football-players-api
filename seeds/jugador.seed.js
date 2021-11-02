const mongoose = require('mongoose');
const Jugador = require("../app/api/models/Jugador.model");

const dotenv = require('dotenv');
dotenv.config();

const jugador = [
    {
        name: 'Erling Haaland',
        team: 'Borussia Dortmund',
        image: 'https://www.bitbol.la/files/image/23/23454/61679f156195a_360_480!.jpg?s=95c754b30ef039319fea0dc28e62d7e2&d=1634181600',
        year: 2000,
    },
    {
        name: 'Kylian Mbappe',
        team: 'Paris Saint-Germain',
        image: 'https://s.hs-data.com/bilder/spieler/gross/284095.jpg?fallback=png',
        year: 1998,
    },
    {
        name: 'Joao Felix',
        team: 'Atletico de Madrid',
        image: 'https://es.coachesvoice.com/wp-content/uploads/2019/07/mobile-9.jpg',
        year: 1999,
    },
    {
        name: 'Neymar',
        team: 'Paris Saint-Germain',
        image: 'https://s.hs-data.com/bilder/spieler/gross/142105.jpg',
        year: 1992,
    },
    {
        name: 'Cristiano Ronaldo',
        team: 'Manchester United',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/245px-Cristiano_Ronaldo_2018.jpg',
        year: 1985,
    },
    {
        name: 'Lionel Messi',
        team: 'Paris Saint-Germain',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
        year: 1987,
    },

];
const jugadorDocuments = jugador.map(jugador => new Jugador(jugador));
mongoose
    .connect('mongodb+srv://futbol:futbol1234@cluster0.xau9n.mongodb.net/football-players?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allJugador = await Jugador.find();
        if (allJugador.length) {
            await Jugador.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Jugador.insertMany(jugadorDocuments);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());