const express = require('express');
const path = require('path')
const app = express();
const puerto=3000

/*
const publicPath = path.resolve (__dirname, './public') 
Este es el comando que estaba en los videos de DH, a mi (Juan) no me funciono. Tuve que buscar en internet y encontre el de abajo que si me funciono para aplicar el CSS.
*/

app.use(express.static(__dirname + '/public'));

app.listen(puerto, () => {
    console.log(`Servidor corriendo en puerto 3000`)
  });

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'));
})