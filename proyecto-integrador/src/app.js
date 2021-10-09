const express = require('express');
const path = require('path')
const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname,'../public')));

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
  }); 
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get("/register", (req,res) => {
  res.sendFile(path.resolve(__dirname, "./views/users/register.html"));
})

app.post("/register", (req,res) => {
  res.send("Te registraste con exito!")
})

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/users/login.html'));
})

app.get('/productDetail', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products/productDetail.html'));
})

app.get('/productCart', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products/productCart.html'));
})

/*Editar Producto */

let routesEditarProducto = require ("./routes/editarProducto.js"); 

app.use ("/editarproducto", routesEditarProducto);

/*app.get('/editarProducto', (req, res) => {
  res.render(path.resolve(__dirname, './views/editarProducto.ejs'));
}) */


/*Fin Editarproducto */


module.exports = app;
