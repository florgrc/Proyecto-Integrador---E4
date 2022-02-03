const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser') 
require('dotenv').config();
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")
var validator = require('validator');


app.use(session({
  secret: 'cookie_secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cookies());
app.use(userLoggedMiddleware);


app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

/*configuracion method*/
app.use(methodOverride("_method"));

/*configuracion metodo post*/
app.use(express.urlencoded({
  extended: false
}))


app.use(express.json());

/*Configuracion carpeta public disponible*/
app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(process.env.APP_PORT, () => {
  console.log(`Servidor listo en http://localhost:${process.env.APP_PORT}/`)
});



/*Rutas*/

let routesIndex = require('./routes/index.js');
let apiRouter = require('./routes/api.js');
let productsRouter = require('./routes/products.js');
let routesUsers = require('./routes/users.js');

app.use('/', routesIndex);
app.use('/api', apiRouter);
app.use('/products', productsRouter);
app.use('/users', routesUsers);
app.use('*', function(req, res, next) {
  res.status(404).render('errors/404');
  next();
});

