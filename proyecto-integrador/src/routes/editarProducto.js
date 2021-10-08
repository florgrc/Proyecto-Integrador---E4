const { cache } = require('ejs');
let express = require('express');

let router = express.Router();

let editarProductoController = require ("../controllers/editarProductoController");

router.get("/detalle", editarProductoController.detalle);

module.exports = router;