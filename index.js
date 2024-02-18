import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(()=>{
        console.log('Base de datos conectada');
    })
    .catch(error => console.log(error));



// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
});

// Agregar router, soporta todos los verbos de http
app.use('/', router);

// Definir carpeta pubnlica

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
})