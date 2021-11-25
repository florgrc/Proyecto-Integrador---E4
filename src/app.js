const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser')

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

/*configuracion method*/
app.use(methodOverride("_method"));

/*configuracion cookies*/
app.use(cookies());

/*configuracion metodo post*/
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json());

app.use(session({
  secret: 'cookie_secret',
  resave: true,
  saveUninitialized: true
}));

/*Configuracion carpeta public disponible*/
app.use(express.static(path.resolve(__dirname, '../public')));

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor listo en http://localhost:${port}`)
});



/*Rutas*/

let routesIndex = require('./routes/index.js');
let productsRouter = require('./routes/products.js');
let routesUsers = require('./routes/users');


app.use('/', routesIndex);
app.use('/products', productsRouter);
app.use('/users', routesUsers);