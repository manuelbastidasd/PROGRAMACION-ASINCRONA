const express = require('express');
const morgan = require('morgan')
const app = express();

app.get('/', (req, res) =>{
    res.send('PROGRAMACION ASINCRONA, MANUEL BASTIDAS')
});

app.listen('3000', function() {
  console.log('Servidor iniciado en el puerto 3000');
});

app.use(express.json());

app.use(morgan('dev'));

const carros = require('./routes/carros');

app.use('/carros', carros);
