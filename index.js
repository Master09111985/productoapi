require("dotenv").config()
const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Crear servidor
const app = express();

// Conectamos a la base de datos
conectarDB();

app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

// Definimos ruta principal
/*app.get('/', (req, res) => {
    res.send('Hola Mundo');
})*/

const PORT = process.env.PORT

app.listen(process.env.PORT, () => {
    console.log('El servidor esta corriendo en puerto: ' + PORT);
})