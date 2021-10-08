const { cache } = require('ejs');
let express = require('express');

let router = express.Router();

let productosController = require ("../controllers/editarProductoController.js");

router.get("/detalle", editarproductoController.detalle);

module.exports = router;