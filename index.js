const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Servidor de Manuel Bastidas')
});

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});