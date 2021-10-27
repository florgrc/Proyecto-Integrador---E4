const express = require('express');
const path = require('path');

const app = express();

const methodOverride = require ("method-override");
app.use (methodOverride("_method"));

app.use (express.urlencoded({ extended: false }))
app.use(express.json());

/* Implementamos utilizar varias carpetas de vistas */

app.set("view engine", "ejs");

app.set("views",path.resolve(__dirname, "views"));

app.use(express.static(path.resolve(__dirname,'../public')));

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
  }); 


/*Rutas*/

let routesMain = require ("./routes/main.js"); 
let productsRouter = require ("./routes/products.js"); 
let routesUsers = require ("./routes/users.js"); 

app.use ("/", routesMain);
app.use ("/products", productsRouter);
app.use ("/users", routesUsers);

