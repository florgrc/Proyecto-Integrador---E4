const express = require('express');
const app = express();
const ejs = require ('ejs');
const path = require('path');
const methodOverride = require ('method-override');
const session = require ('express-session');
const cookies = require ('cookie-parser')


/* Implementamos utilizar varias carpetas de vistas */
app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname, "views"));

/*configuracion method*/
app.use (methodOverride("_method"));
 
/*configuracion cookies*/
app.use(cookies());

/*configuracion metodo post*/
app.use (express.urlencoded({ extended: false }))
app.use(express.json());


/*Configuracion carpeta public disponible*/
app.use(express.static(path.resolve(__dirname,'../public')));

app.listen (3000, () => {
  console.log('Servidor corriendo en puerto 3000')
});


/*Rutas*/

let routesMain = require ('./routes/main.js'); 
let productsRouter = require ('./routes/products.js'); 
let routesUsers = require ('./routes/users');


app.use ('/', routesMain);
app.use ('/products', productsRouter);
app.use ('/users', routesUsers);





 






